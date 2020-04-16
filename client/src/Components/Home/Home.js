import React, { Component } from "react";
// import { SmileTwoTone } from "@ant-design/icons";
import Search from "../search.js/search";
import CardLIsting from "../CardLIsting/Cardlisting";
import Footer from "../footer/Footer";
import { Divider} from 'antd';
import Categories from "../categories/Categories";

// import Categories from "../categories.js/Categories";
// import CardLIsting from "../categories.js/Categories";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
              <Search/>

              <Divider  style={{ color: '#333', fontWeight: 'normal',height:100 }}>
                <h3 style={{textAlign:"center",marginTop:"20%",fontFamily:"Dancing Script",fontSize:50}}>Trending in your location</h3>
              </Divider>

              <CardLIsting/>

              <Divider  style={{ color: '#333', fontWeight: 'normal',height:100 }}>
                <h3 style={{textAlign:"center",marginTop:"20%",fontFamily:"Dancing Script",fontSize:50}}>Discover</h3>
                <h3 style={{textAlign:"center",marginTop:"15%",fontFamily:"Dancing Script",fontSize:25}}>Most Popular Categories</h3>
              </Divider>
              
              <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}> </Divider>
              <Categories/>
              <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}> </Divider>
              <Footer/>
        
            </div>
        );
    }
}
