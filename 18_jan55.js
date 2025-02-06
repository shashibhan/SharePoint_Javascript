// Write a function to create profile
// take image url/path from user and user name ,mob,address,bio
// and display the profile in center of user screen in card form



function create_profile( image_path,user_name,mobile_no,user_bio){
    document.write(`<div style=" margin:auto; width:300px; height:300px; border:1px solid red;">
        <img style="margin:auto; width:300px;"   src="${image_path}" alt="missing">
        <div>
            <span>name :${user_name || "Not available"}</span><br>
            <span>mobile no :${mobile_no || "Not available"}  </span><br>
            <span>Bio :${user_bio  || "Not available"}</span><br>

            <button>Follow</button>
            <button>Edit</button>


        </div>

    </div>
    `)
}
let image_path= prompt("Enter the Your image path:")
let user_name= prompt("Enter the Your User_name:")
let mobile_no= prompt("Enter the Your mobile_no:")
let user_bio= prompt("Enter the Your user_bio:")

create_profile(image_path,user_name,mobile_no,user_bio)



// Arrow function is the modern way writing function in javascript.

