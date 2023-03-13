const defaultName = "sranik28";
const searchBtn = async () =>{
    const inputField = document.getElementById("input-field");
  const url = `https://api.github.com/users/${inputField.value}`;
  const res = await fetch(url);
  const data = await res.json();
  showData(data)
  inputField.value = '';
}
const showData = (data) =>{
    console.log(data)
   try{
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = `
                <div class="card card-side bg-slate-900 shadow-xl">
                    <figure><img class="w-52 rounded-full p-6" src="${data.avatar_url}" alt="Movie"/></figure>
                    <div class="card-body">
                      <div class = "flex">
                      <h2 class="card-title font-bolde text-2xl">${data.name}</h2>
                      <p class ="text-end" >${new Date(data.created_at).toLocaleDateString("en-US")}</p>
                      </div>
                      <p class = "text-sky-200">${data.login}</p>
                      <p>${data.bio? data.bio : "not found"}</p>
                      <div class="grid grid-cols-1 lg:grid-cols-3 bg-zinc-700 h-32 rounded-xl">
                      <p class="text-center  mt-10 "> Repository <br> ${data.public_repos}</p>
                      <p class="text-center mt-10 px-6"> Followers <br> ${data.followers}</p>
                      <p class="text-center mt-10 "> Following <br> ${data.following}</p>
                    </div>
                    <div class="flex mt-5">
                        <p class="text-left"><i class="fa-brands fa-twitter"></i> ${data.twitter_username? data.twitter_username : "Not Availavble"}</p>
                        <p class="text-center"><i class="fa-solid fa-envelope"></i>  ${data.email? data.email : "Not Availavble"}</p>
                       <p class="text-right"><i class="fa-solid fa-location-dot"></i>  ${data.location? data.location : "Not Availavble"}</p>
                    </div>
                      <div class="card-actions justify-end">
                      </div>
                    </div>
                </div>
    `
   }
   catch(error){
    alert("please Enter valid url")
   }
}
window.addEventListener("load",()=>{
    showData(defaultName)
})