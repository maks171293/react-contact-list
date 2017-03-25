var CONTACTS = [
  {
    id: 1,
    name: 'Jon Snow',
    phoneNumber: '+490663857382',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Kit_Harington_June_2014.jpg/100px-Kit_Harington_June_2014.jpg',
  },
  {
    id: 2,
    name: 'Daenerys Targaryen',
    phoneNumber: '+490933435642',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Emilia_Clarke_%28March_2013%29_%28headshot%29.jpg/100px-Emilia_Clarke_%28March_2013%29_%28headshot%29.jpg',
  },
  {
    id: 3,
    name: 'Jaime Lannister',
    phoneNumber: '+490354343242',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Nikolaj_Coster-Waldau_%2814771529841%29_%28cropped%29.jpg/100px-Nikolaj_Coster-Waldau_%2814771529841%29_%28cropped%29.jpg',
  },
  {
    id: 4,
    name: 'Cersei Lannister',
    phoneNumber: '+490624882942',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lena_Headey_Primetime_Emmy_Awards_2014.jpg/100px-Lena_Headey_Primetime_Emmy_Awards_2014.jpg',
  },
  {
    id: 5,
    name: 'Tyrion Lannister',
    phoneNumber: '+490955692745',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Peter_Dinklage_by_Gage_Skidmore.jpg/100px-Peter_Dinklage_by_Gage_Skidmore.jpg',
  },
  {
    id: 6,
    name: 'Sansa Stark',
    phoneNumber: '+490693534282',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sophie_Turner_SDCC_2014_%28cropped%29.jpg/170px-Sophie_Turner_SDCC_2014_%28cropped%29.jpg',
  },
  {
    id: 7,
    name: 'Arya Stark',
    phoneNumber: '+490954334532',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Maisie_Williams_by_Gage_Skidmore_2.jpg/170px-Maisie_Williams_by_Gage_Skidmore_2.jpg',
  },
  {
    id: 8,
    name: 'Khal Drogo',
    phoneNumber: '+490663857382',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Jason_Momoa_Supercon_2014.jpg/170px-Jason_Momoa_Supercon_2014.jpg',
  },
  {
    id: 9,
    name: 'Ned Stark',
    phoneNumber: '+490525732758',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sean_Bean_TIFF_2015.jpg/170px-Sean_Bean_TIFF_2015.jpg',
  },
  {
    id: 10,
    name: 'Robert Baratheon',
    phoneNumber: '+490543857382',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/George_R.R._Martin_by_Gage_Skidmore.jpg/220px-George_R.R._Martin_by_Gage_Skidmore.jpg',
  }
];


var Contact = React.createClass({
  render: function(){
    return (
      <li className="contact">
         <img className="contact-image" src={this.props.imgUrl} width="60px"/>
          <div className="contact-info">
             <div className="contact-name">{this.props.name}</div>
             <div className="contact-phone">{this.props.phoneNumber}</div>
          </div>
      </li>
    )
  }
});

var ContactList = React.createClass({

  getInitialState: function(){
    return {
      contacts: CONTACTS
    }
  },

  handleChange: function(event){
    var inputValue = event.target.value.toLowerCase();
    var contactsFilterd = CONTACTS.filter(contact=>{
      return contact.name.toLowerCase().indexOf(inputValue) !== -1;
    });
    this.setState({contacts: contactsFilterd});
  },

  render: function(){
    return (
      <div className="contact-wrap">
        <input className="contact-input" type="text" placeholder="Enter the name" onChange={this.handleChange}/>
          <ul className="contact-list">
              {
                this.state.contacts.map(contact => {
                  return <Contact key={contact.key}
                           name={contact.name}
                           phoneNumber={contact.phoneNumber}
                           imgUrl={contact.imgUrl}
                           />
                 })
              }
          </ul>
        </div>
    )
  }
});

ReactDOM.render(<ContactList />,
               document.getElementById('content'));
