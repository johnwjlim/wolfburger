import React from 'react'
import Layout from '../components/layout'

// export default class NotFoundPage extends React.Component {
//   render() {
//       return (
//         <div>
//           <h1 style={{color: ""}}>NOT FOUND</h1>
//           <p style={{color: "#484848"}}>Route doesnt exist... poor you</p>
//         </div>
//       )
//   }
// }

const NotFoundPage = () => (
  <Layout>
    <h1 style={{color: "#484848"}}>NOT FOUND</h1>
    <p style={{color: "#484848"}}>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage;
