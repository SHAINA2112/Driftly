import NorthernPak from "../assets/images/Packages/NorthernPak.jpeg";
import phool from "../assets/images/Packages/phool.jpeg"
import customize from "../assets/images/Packages/customize.jpeg"
const tour = [
  {
    id: 1,
    image: NorthernPak,
    title: "Northern Pakistan Adventure",
    destination: "Hunza Valley",
    country: "Pakistan ",
    rating: 4.9,
    duration: "7 Days",
    people: "5 People",
    price: "$799",
    description: "Experience breathtaking mountains, crystal-clear lakes and unforgettable adventures.",
    featured: true,
  },
  {
    id:2,
    image:phool,
    title:"KL",
    destination:"Kolalam Pur",
    country:"Malaysia",
    rating:4.8,
    duration:"15 Days",
    people:"4",
    price:"$1999",
    description:"Experience the culture of Malaysia and visit the historical places including KL and Malakah.",
    featured:true,
  },
  {
    id:3,
    image:customize,
    title:"Customize your own Package",
    destination:"AnyWhere",
    country:"Any Country",
    duration:"your duration",
    people:"your family",
    price:"best prices",
    description:"Experience the beauty of the world by your eyes.",
    featured:true,
  }
];
export default tour;
