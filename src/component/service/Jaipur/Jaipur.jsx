import React, { useState } from 'react';
import data from './data1.jsx';
import Tours from './JaipurDest.jsx'
import './jaipur.css';
const App = ()=>{

  const[tours, setTours] = useState(data)

  function removeTour(id){
    const newTours = tours.filter ( tour => tour.id !==id);
    setTours(newTours);
  }




  return (
      <div className='section-1'>
        <div className='container'>
         <div >
           <h1 className="heading1">Destination Wedding in Jaipur</h1><br/>
         </div>
         
         <div >
          <p>Looking for a Wedding Planner in Jaipur, Perfect Pair - one of the best destination wedding planner in Jaipur, is an apex destination wedding planning company in Jaipur that can perfectly build beautiful wedding sets for a memorable wedding ceremony. Jaipur has been the centerpiece for destination weddings in Rajasthan and across India. Also known for luxury and royalty, Jaipur offers many royal wedding venues such as Raj Palace, Jal Mahal Palace, Rambagh Palace, Alsisar Haveli or Mandawa Haveli for every budget. An experienced royal wedding planner in Jaipur, can also arrange for a lavish wedding at an offbeat location outside the city, such as Samode Palace, that offers a heritage feel amidst a romantic ambiance for a wedding.</p><br/>
         </div>
         
         <div >
           <h2 className='heading2' >Destination Wedding Venues in Jaipur</h2><br/>
         </div>
   
         <div >
   
         <p>Destination Wedding Venues in Jaipur: You need to take care of numerous other things while planning a destination wedding in Jaipur. And that is the wedding package, photography cost, travel cost, the cost of the gifts, etc. For couples seeking a royal wedding venue in Rajasthan, Jaipur is an ideal location to plan a destination wedding. Palatial Wedding venues in Jaipur offer your guests an out-of-the-world experience. A mix of royalty, luxury, and a wedding celebration, Weddings by Neeraj Kamra team offers exceptional wedding planning services in Jaipur.

          <br/> <br/>
   
          Wedding Venues in Jaipur, with its historical background and perfect accessibility, makes a top choice in Rajasthan, especially for Indian families. Royal Palaces, old Mansions, and historical monuments perfectly fit to host the Indian wedding rituals. Jaipur offers varied choices from top-notch Palaces to luxury resorts ranging from Rs. 30000 to Rs. 1.5 lakh per person on an average for two days of all-inclusive festivities. </p><br/><br/>
   
         </div>
       
        

       </div>
        <div className='section-1'>
       <div className='app'>
         <Tours tours ={tours} removeTour ={removeTour}> </Tours>
        </div>
   
       </div>
      </div>

    
  );
}
export default App;
