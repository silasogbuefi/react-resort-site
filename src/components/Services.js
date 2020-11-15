import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from "./Title";

export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail />,
                title:"free cocktails",
                info: "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake"
            },
            {
                icon:<FaHiking />,
                title:"Endless Hiking",
                info: "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake"
            },
            {
                icon:<FaShuttleVan />,
                title:"Free Shuttle",
                info: "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake"
            },
            {
                icon:<FaBeer />,
                title:"Strongest beer",
                info: "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>

            </section>
                
                
           
        )
    }
}
