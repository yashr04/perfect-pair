import React, { useState } from 'react';
import data from './data1.jsx';
import Tours from './UdaipurDest.jsx'
import './udaipur.css';
const Udaipur = ()=>{

  const[tours, setTours] = useState(data)

  function removeTour(id){
    const newTours = tours.filter ( tour => tour.id !==id);
    setTours(newTours);
  }




  return (
      <div className='section-1'>
        <div className='container'>
         <div >
           <h1 className="heading1">Destination Wedding in Udaipur</h1><br/>
         </div>
         
         <div >
          <p>Having <span>destination wedding in Udaipur </span>is mindblowing. Perfect Pair ,one of the finest destination wedding planner in Udaipur with an experience of planning and managing 100+ weddings in Udaipur, Goa, Kerela, Jodhpur and Dubai is your true mate in Udaipur for your wedding planning.<br/>< br/>
          For Destination Wedding Venues in Udaipur, Perfect Pair wedding team is expert in organizing palace for best weddings in Udaipur, Rajasthan with an unique and extraordinary decor, rajasthani hospitality, exotic palaces as wedding venues, folk music & dance as entertainment option and most importantly the wedding planning as flawless. We look forward to host you soon.</p><br/>
         </div>
         
         <div >
           <h2 className='heading2' >Destination Wedding Cost in Udaipur</h2><br/>
         </div>
   
         <div >
   
         <p>A destination wedding is a dream for every man and woman. It’s like a crowning stroke if the wedding venue is a palace in Udaipur. Udaipur destination weddings are the most desirable and luxurious wedding venues in India. Udaipur is a land of kings and queens; there is something about the place which adds to the glory of marriage. The majestic forts, royal palaces, beautiful lakes and the picturesque dunes, just make a wedding heavenly. Event management company in Udaipur and their wedding planners leave no stone unturned to make a wedding memorable for the bride and groom.<br/> <br/>
   
         Destination wedding planner in Udaipur has a rate card for a wedding because the cost can vary from case to case. The number of guests, the days of your ceremony, and the hotel you choose varies from person to person. The companies have comprised their staff with some best wedding venues in Udaipur professionals which helps to guide you through the whole plan of your wedding. There are certain cost factors which should be taken into account. The cost associated queries are common while planning a destination wedding in Udaipur. One needs to be sure about his hard earned money and how he wants to spend it.</p><br/><br/>
   
         </div>
       
        <div >
         <h4 className="heading3">Common choice palaces for a destination wedding in Udaipur:</h4><br/>
        </div>
         
         <div >
         <p>When you plan a wedding in Udaipur, you already have a palace in mind that is perfect for your wedding. The wedding planning company in Udaipur provides you a wedding package where you can choose the type of wedding you crave for. According to the people's choice, these are the most popular venues listed as follows-</p><br/>
         </div>
   
         <div >
          <h4 className="heading3">Above 60 lakhs</h4><br/>
         </div>
   
         <div >
         <p>⇢Chunda Palace<br/>
         ⇢Ramada Udaipur</p><br/>
   
         </div>
   
   <div > 
   <h4 className="heading3">Factors that affects the budget of your wedding</h4><br/>
   </div>
       
       <div >
       <span className='sub'>⇢Location</span> <br/>
       <p className='details'>The rich cultural heritage of the Palaces in Udaipur is what that draws people to plan their wedding. The location of your wedding should be planned accordingly. The royal wedding planner in Udaipur makes it sure that whatever location you choose for your wedding, it should be in sync with how you want your wedding to be carried out, the chain of events that follows and the arrangements required for your dream to come true. Choice of location should be done according to your <span>wedding budget.</span></p><br/>
   
       </div>
   
       <div >
       <span className='sub'>⇢Accommodation</span><br/>
         <p className='details'>Your guest size will decide the accommodation preferences. Some palaces do not provide the accommodation for your guests; hence you will need a hotel for your guests which are located in the close proximity of the <span>wedding venue.</span> The wedding venue and accommodation will make your 50% of the cost. There are 5-star heritage hotels, 5-star hotels, and the hotels of your choice for your different types of guests.</p><br/>
       </div>
   
   
       <div >
       <span className='sub'>⇢Catering Costs</span><br/>
         <p className='details'> The type of cuisine you choose will affect your cost accounting of the wedding. The buffet system in India is very much prominent. It will cost Rs 2500- Rs 4000 per person in a 5-star hotel and around Rs 800- Rs 1000 in a 4-star hotel. The hotels lower than this would not be justified with a <span>destination wedding</span>.</p><br/>
       </div>
   
       <div >
       <span className='sub'>⇢Décor costs</span><br/>
         <p className='details'>The mandap decoration is the most alluring task of a <span>destination wedding planning company in Udaipur.</span> The lighting and the floral arrangement requires a large sum of your money. Many Palaces don’t allow outside decorators. Generally, wedding décor may cost between Rs 6,00,000 - Rs. 15,00,000. However, if you desire something unique and splendid, it may cost you above Rs 15 lakhs.</p><br/>
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
export default Udaipur;
