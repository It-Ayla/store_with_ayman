import React from "react"

export default function ItemCard() {
    return (
        <div className="card">
            <div className="card-img-container">
                <img className="card--img" src="https://www.leparisien.fr/resizer/Dmyk33xzTQ0M3yN5cGuGqwccyOE=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/E4SRMLH7Q5EE7HNRUZIWG5LRHI.jpg" alt="" />
            </div>
            <div className="card--body">
                <h2 className="card--title">Air Jordan 1</h2>
                <p className="card-review-container">
                    <span className="card--stars">⭐⭐⭐⭐</span>
                    <span className="card--reviews">(123 reviews)</span></p>
                <p className="card--footer" >
                    <span className="card--prices">
                        <span className="old--prices"> $150</span>
                        <span className="new--prices">100</span>
                    </span>
                    <button className="btn card--add-btn">🛒</button>
                </p>
            </div>
        </div>
    )
}