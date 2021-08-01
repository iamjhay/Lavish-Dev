import React from "react";
import { Link } from "react-router-dom";
import { GiCrystalBars, GiCutDiamond } from "react-icons/gi";
import { FaFire } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "./Button";
import "./Pricing.css";

function Pricing() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: 64, top: "1rem" }}>
        <section className='pricing'>
          <h1 className='pricing__title'>Pricing</h1>
          <div className='pricing__container'>
            <div className='pricing__row'>
              <div className='card'>
                <Link to='/sign-up' className='card-body'>
                  <div className='Icon'>
                    <FaFire />
                  </div>
                  <h3>Starter Pack</h3>
                  <h4>$99.99</h4>
                  <p>per month</p>
                  <ul className='card__features'>
                    <li>100 new users</li>
                    <li>$10,000 Budget</li>
                    <li>Retargeting Analytics</li>
                  </ul>
                  <Button buttonSize='btn-wide' buttonColor='blue'>
                    Choose Plan
                  </Button>
                </Link>
              </div>
              <div className='card'>
                <Link to='/sign-up' className='card-body info'>
                  <div className='Icon'>
                    <GiCrystalBars />
                  </div>
                  <h3>Gold Rush</h3>
                  <h4>$299.99</h4>
                  <p>per month</p>
                  <ul className='card__features'>
                    <li>1000 new Users</li>
                    <li>50,000 Budget</li>
                    <li>Lead Gen Analytics</li>
                  </ul>
                  <Button buttonSize='btn-wide' buttonColor='blue'>
                    Choose Plan
                  </Button>
                </Link>
              </div>
              <div className='card'>
                <Link to='/sign-up' className='card-body'>
                  <div className='Icon'>
                    <GiCutDiamond />
                  </div>
                  <h3>Diamond</h3>
                  <h4>$999.99</h4>
                  <p>per month</p>
                  <ul className='card__features'>
                    <li>Unlimited Transactions</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Spendings</li>
                  </ul>
                  <Button buttonSize='btn-wide' buttonColor='primary'>
                    Choose Plan
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </IconContext.Provider>
    </>
  );
}

export default Pricing;
