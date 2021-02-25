import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="row gy-3">
                            {
                                Sdata.map((val, ind) => {
                                    return  <Card imgsrc={val.imgsrc} keys={ind} title={val.title}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service
