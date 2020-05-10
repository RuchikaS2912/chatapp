// import React from 'react'
// // import ReactDOM from 'react-dom'
// import Avatar from 'react-avatar-edit'

// class ProfileIcon extends React.Component {

// constructor(props) {
//     super(props)
//     const src = './example/einshtein.jpg'
//     this.state = {
//         preview: null,
//         src
//     }
//     this.onCrop = this.onCrop.bind(this)
//     this.onClose = this.onClose.bind(this)
// }

// onClose() {
//     this.setState({preview: null})
// }

// onCrop(preview) {
//     this.setState({preview})
// }

// render () {
//     return (
//     <div>
//         <Avatar
//             width={390}
//             height={295}
//             onCrop={this.onCrop}
//             onClose={this.onClose}
//             src={this.state.src}
//         />
//         <img src={this.state.preview} alt="Preview" />
//     </div>
//     )
//     }
// }

// export default ProfileIcon
// // ReactDOM.render(<App /> , document.getElementById('root'))


import React from 'react'
import {Image} from 'react-bootstrap';
import oil from '../images/oil.jpg';

function ProfileIcon() {
    return (
        <div>
            <Image src={oil} alt="Profile Image" style={{width:'55%',borderRadius:'50%'}}/>
        </div>
    )
}

export default ProfileIcon
