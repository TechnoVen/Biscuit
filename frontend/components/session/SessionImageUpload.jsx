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
    const {image_url} = this.state;
    return (
        <div className="session-image-upload">
          <Dropzone
            className="session-dropzone"
            activeClassName="session-dropzone-active"
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop}
            maxSize={1000000}>
            {image_url === '' ? <p>Upload Profile Image</p> :
              <div style={{backgroundImage: 'url(' + image_url + ')'}}>
              </div>}
          </Dropzone>
        </div>
    );
  }
}
