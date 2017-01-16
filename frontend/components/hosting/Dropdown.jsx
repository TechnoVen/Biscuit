import React from 'react';

export default class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      selected: null
    };

    this.select = this.select.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
  }

  select(selected) {
    const {handleSelectChange, listType} = this.props;
    this.props.handleSelectChange(listType, selected);
    this.setState({selected});
  }

  show() {
    document.addEventListener('click', this.hide);
    this.setState({visible: true});
  }

  hide() {
    document.removeEventListener('click', this.hide);
    this.setState({visible: false});
  }

  _selectedClass(selection) {
    const {selected} = this.state;
    return selected === selection ? "selected" : "";
  }

  renderListItems() {
    const {list} = this.props;
    return list.map((item, idx) => (
      <div
        key={`${item}-${idx}`}
        onClick={() => this.select(item)}
        className={this._selectedClass(item)}
      >
        <span>{item}</span>
      </div>
    ));
  }

  render() {
    const {visible, selected} = this.state;
    const {listType} = this.props;
    const _showClass = `dropdown-container ${visible ? " show" : ""}`;
    return (
      <div className={_showClass}>
        <div className="dropdown-display" onClick={this.show}>
          <span>{selected ? selected : listType}</span>
        </div>
        <div
          className="dropdown-list"
        >
          <div>
            {this.renderListItems()}
          </div>
        </div>
      </div>
    );
  }
}
