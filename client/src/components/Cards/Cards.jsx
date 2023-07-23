
import Card from "./Card/Card";
import './Cards.css'
import { DataContext } from "../../Context/Context";
import { useContext } from "react";
export function Cards(){

    const {curImages}=useContext(DataContext);
    function getSpan(x){
        if(x%4==0 && x%3==0) return 3;
        if(x%2==0) return 2;
        return 1;
    }
    return(
            <div className="cards-container">
            {
                curImages.map((image,i)=><Card image={image} span={getSpan(i)} key={image._id} ></Card>)
            }
            </div>
        
    )
}