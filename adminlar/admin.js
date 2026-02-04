let user=document.getElementById('user')
const api='http://213.230.108.224:49304/api/v1/'





function getUsers(){
    axios.get(api+"admin")
    .then(response=>{
        user.innerHTML=""
        response.data.forEach(item=>{
            user.innerHTML+=`
            <tr class="hover:bg-gray-50 transition">
                <td class="px-6 py-4 text-sm text-gray-700">${item.id}</td>
                <td class="px-6 py-4 font-medium text-gray-900">${item.name}</td>
                <td class="px-6 py-4 text-gray-700">${item.phone}</td>
            </tr>
            `
        })
        console.log(response.data);
        
    })
    .catch(err=>{
        console.error(err)
    })
}

getUsers()