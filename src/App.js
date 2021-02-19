import React from "react"
// import logo from './logo.svg';
import './App.css';

const innerMaterial = [
  {
      img:"https://naurok-test.nyc3.cdn.digitaloceanspaces.com/uploads/test/163662/278702/954492_1587459071.jpg",
      heading:"This is an Fruit",
      parag:"Fruits are the seed-bearing structure in flowering plants, formed from the ovary after flowering."
  },
  {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRwZtFmfKEY1_mwibtwKZdP_GN4hWh_LgbQ&usqp=CAU",
      heading:"This is a Vegetable",
      parag:"Vegetables pertain specifically to plant parts that are edible such as leaves, roots, stems, flowers, etc."
  },
  {
    img:"https://www.yogurt-land.com/assets/2261.jpg",
    heading:"This is a Berry",
    parag:"Berries, in botany, a simple fleshy fruits that usually have many seeds."
},
]

const newName = innerMaterial.map((props) => {
  const {img, heading, parag} = props
  return (<div className="slot">
            <img src={img} alt={"poper"} className="image"/>
              <div>
                <h1 className="heading">{heading}</h1>
                <h3>{parag}</h3>
              </div>
          </div>)
})


export default newName;
