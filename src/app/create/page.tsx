"use client"

import {  useState } from "react"

import { MouseEvent } from "react";
export default function CreateUser() {
    // const router=useRouter()

    const [name, setname] = useState<string>("");
    const [description, setdescription] = useState<string>('');
    const [price, setprice] = useState<number>();
    //   const [picture, setpicture] = useState<File | null>(null)

    // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         setpicture(e.target.files[0]);
    //     }
    // };
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (price !== undefined) {
        formData.append('price', price.toString());
    }

    // Include image upload if file is selected
    // if (picture) {
    //     formData.append('picture', picture);
    // }
    const handlesubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
       
        try {

        
            const response = await fetch('/api/user/', {
                method: 'POST',
               
                body: formData,
                
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();
            console.log(jsonData)
          
            
            // Process the JSON data
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div>
                <h1 className="text-center font-serif font-extrabold mb-5 text-2xl">Create New Product</h1>
                <div className="flex flex-col">
                    <input
                        type="text"
                    
                        placeholder="Enter Product Name"
                        className="p-3 bg-amber-100 text-black rounded-2xl border-2 border-black "
                        onChange={(e) => setname(e.target.value)}
                    />
                    {/* <input
                        type="file"
                        
                        placeholder="Upload Product Image"
                        className="p-3 bg-amber-100 text-black rounded-2xl border-2 border-black "
                        onChange={handleImageChange}
                    /> */}
                    <input
                        type="text"
                       
                        placeholder="Enter Product Description"
                        className="p-3 bg-amber-100 text-black rounded-2xl border-2 border-black "
                        onChange={(e) => setdescription(e.target.value)}
                    />
                    <input
                        type="number"
                        value={price}
                        placeholder="Enter Product Price"
                        className="p-3 bg-amber-100 text-black rounded-2xl border-2 border-black "
                        onChange={(e) => setprice(Number(e.target.value))}
                    />
                    <button onClick={handlesubmit} type="submit" className="p-3 font-extrabold rounded-2xl w-[40%] bg-white text-black mt-4 cursor-pointer hover:bg-amber-200">
                        Add Product
                    </button>
                </div>
            </div>
        </div>
        )
}







