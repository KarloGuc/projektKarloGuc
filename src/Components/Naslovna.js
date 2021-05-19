import {Link} from "react-router-dom";
import Slika from "../download3.png";
import Slika1 from "../safe.png";
import Slika2 from "../lika.png";
import Slika3 from "../velebit3.jpg";
import Slika4 from "../inst2.jpg";
import Slika5 from "../face2.png";
import Slika6 from "../download.jpg";
import Slika7 from "../PIC.jpg"



function Naslovna() {
  return (


    
    <div>
     <table align="center" border="0">
     

      <tr>

        <td><img src={Slika6} className="img"/></td>

      <td className="da2"><p className="ne"> Kaniža Gospićka 4b, 53000 Gospić<br></br>053/560-450<br></br>053/560-451 </p></td> 

      <td className="da3"><img src={Slika2}></img></td>
      
       <td><img src={Slika1} className="img2"></img></td>
       
       
       </tr>

      
    
      </table> 

      <table border="0" className="treca">



      <tr className="boja">

        <td><h2 className="druga">Nacionalni Park Velebit</h2><br></br>
          



  <div class="navbar">
  
 
          <div class="dropdown">
        <button class="dropbtn"><h2 className="treca">TURISTIČKE ATRAKCIJE</h2> 
      <i class="fa fa-caret-down"></i>
        </button>
      <div class="dropdown-content">
      <Link to = '/opcenito'>CEROVAČKE ŠPILJE</Link>
     
      </div>

   
    
        </div> 
</div>
	
<div class="navbar1">
  
 
  <div class="dropdown">
<button class="dropbtn"><h2 className="treca">PRIRODNA BAŠTINA</h2> 
<i class="fa fa-caret-down"></i>
</button>
<div class="dropdown-content">
<Link to = '/poveznica'>FLORA</Link>

</div>



</div> 
</div>


	
<div class="navbar2">
  
 
  <div class="dropdown">
<button class="dropbtn"><h2 className="treca">TURISTIČKA PONUDA</h2> 
<i class="fa fa-caret-down"></i>
</button>
<div class="dropdown-content">
<Link to = '/zadnja'>CJENIK</Link>

</div>



</div> 
</div>


  

  </td>

     


          </tr>

      </table>

      
    
    
    <table border="0" width="100%"> 
    <tr className="mozda1">

      <td>


      <img className="mozda"/>
     
      </td>
    </tr>

    </table>

    <br></br>

    <table border="0" width="100%" className="pet">

    <tr>


      <td>

      <center>
     
      <div className="cetv">
        

<p class="guc1">Umjesto pisanja novog teksta koji bi čitatelju ponudio već poznate podatke o puno puta opisanom Velebitu, prilažemo citat iz knjige „Biljni svijet Velebita“ autora akademika Sergeja Forenbachera. Riječi su to izvrsnog poznavatelja i posjetitelja Velebita, koji je svoje znanje, iskustvo i doživljaje brojnih posjeta osebujnom svijetu Velebita, pretočio u svima nam korisne, u potpunosti upotrebljive i poučne knjige.
<br></br><br></br>
Kako nam kazuju geografski, orografski i drugi izvori, brdski masiv Velebita, jedan od najznatnijih u užem dinarskom području, proteže se, u dužinu otprilike 145 km, od Vratnika nad Senjom na sjeverozapadu do okuke Zrmanje na jugoistoku. Od obalnog pojasa do kopnenog podnožja u Lici, u prosjeku je širok 14 km, ali od mjesta do mjesta širina varira, od najviše 30 km u sjevernom do najmanje 10 km u njegovom južnom dijelu. Na površini približno 2 270 km2 razasut je splet bezbrojnih krševitih grebena i ponikva, kukova, gorskih hrptova, dolina i pretplaninskih vrhova, od kojih njih 130 u prosjeku premašuje nadmorsku visinu 1370 m. Oni u sjevernom dijelu Velebita dosežu visinu gotovo 1700 m (Mali Rajinac 1699 m), u srednjem dijelu više od 1600 m (Šatorina 1624 m, Ograđenik 1604 m, Ograđenica 1614 m), a u južnom i najvišem dijelu od 1700 do 1758 m (Babin vrh 1723 m, Vaganski vrh 1757 m, Segestin 1715 m, Malovan 1709 m, Sveto brdo 1751 m).
</p> 

<br></br><br></br><br></br><br></br>

    <img src = {Slika7} class="niko"></img>
    <h2>
     Projekt „Centar izvrsnosti Cerovačke špilje – održivo upravljanje prirodnom baštinom i krškim podzemljem” provodi se u okviru Operativnog programa „Konkurentnost i kohezija 2014-2020 u okviru Prioritetne osi 6 – Zaštita okoliša i održivost resursa....
    </h2>
    <br></br><br></br>

   
    

      </div>

      </center>

      </td>
  
    </tr>

    </table>
    

    <table border="0" class="sest">

    <tr>

    <td className="osam">
    <a href="https://www.pp-velebit.hr/hr/"><img src={Slika6} className="sed "/></a>

    
    </td>

    <td className="dev">
      <center>
      <a href="https://www.instagram.com/np_paklenica/?hl=hr">  <img src={Slika4} className="slika"></img></a>
      </center>
    </td>

    <td className="dest">
    <a href="https://www.facebook.com/natureparkvelebit/"><img src={Slika5} className="slika"></img></a>
    </td>


    </tr>


  

    </table>
    
    
    
</div>


   
  
  );
}



export default Naslovna;