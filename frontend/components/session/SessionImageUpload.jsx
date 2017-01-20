import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'kws12aa';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dmmcusgxy/image/upload';


export default class SessionImageUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      image_url: ''
    };

    this.onImageDrop = this.onImageDrop.bind(this);
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    const {setUserImageUrl} = this.props;
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        setUserImageUrl(response.body.secure_url);
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
        <div className="session-image-upload">
          <Dropzone
            className="session-dropzone"
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop}
            maxSize={1000000}>
            <p>Upload Profile Image</p>
            {this.state.image_url === '' ? null :
              <div>
                <img src={this.state.image_url} />
              </div>}
          </Dropzone>
        </div>
    );
  }
}
