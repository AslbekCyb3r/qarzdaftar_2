let payments = document.getElementById('payments')
const api = 'http://213.230.108.224:49304/api/v1/'




function getpayments() {
    axios.get(api + "payment")
    .then(res=>{
        payments.innerHTML = ""

        res.data.forEach(item=>{
            payments.innerHTML += `
            <tr class="hover:bg-gray-50 transition text-sm">
                <td class="px-4 py-3 w-[60px] text-gray-600 border-2">
                    ${item.id}
                </td>

                <td class="px-4 py-3 w-[90px] font-medium text-gray-700 border-2">
                    ${item.clients.id}
                </td>

                <td class="px-4 py-3 w-[90px] text-gray-700 border-2">
                    ${item.user.id}
                </td>

                <td class="px-4 py-3 w-[200px] text-gray-600 truncate border-2" >
                    ${item.description}
                </td>

                <td class="px-4 py-3 w-[80px] text-gray-700 font-semibold border-2 text-center">
                    ${item.amount}
                </td>

                <td class="px-4 py-3 w-[140px] text-gray-500 border-2">
                    ${new Date(item.createdAt).toLocaleDateString()}
                </td>

            </tr>
            `
        })
    })
    .catch(err=>console.error(err))
}

getpayments()