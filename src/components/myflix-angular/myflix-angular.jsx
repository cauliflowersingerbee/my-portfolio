import React from 'react';
import Navbar from '../navbar/navbar';



 <div id='myflix-angular' >
 <Card style={{background: '#F2CA52', width: '70rem', height: '40rem', marginTop: '2rem'}}>
  <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#000', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '800'}}>
      MyFlix Angular
  </Card.Title>
      <Row>
              <Col style={{margin: '2rem', marginRight: '0.5rem'}}>

                    <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px'}}>About the App</p>
                  
                  <div>
                  <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', float: 'left', margin: '1rem'}}/>
                    
                  
                    <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>This is a single-page, responsive movie app built with Angular, with routing and several
                  interface views. The client-side is an Angular rendition of a previous project that I built 
                  with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc </p>

                  <Row>
          <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
          <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
         <Col></Col>
         <Col></Col>
       
      </Row>
                  </div>      

            </Col>
       
            <Col style={{marginRight:'2rem'}}>
            <Card style={{margin: '2rem'}}>
            <img id='user-flows' src={UserFlows} alt='' style={{margin: '.1rem', width: '600px',}}/>
            </Card>   
            <Row><p style={{color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows on Adobe Illustrator. These were crucial in guiding me as I added features to the app. To keep track of the project, I used Kanban boards built with Trello. </p></Row>
           
            </Col>

      </Row>
    
     
</Card> 


</div>
