let depts = document.getElementById('depts')
const api = 'http://213.230.108.224:49304/api/v1/'



function getdepts() {
    axios.get(api + "debts")
        .then(res => {
            depts.innerHTML = ""

            res.data.forEach(item => {


                let rang = 'yellow'

                if (item.soldo == item.amount) {
                    rang = 'green'
                }

                if (item.soldo == 0) {
                    rang = 'red'
                }

depts.innerHTML += `
<tr class="hover:brightness-110 transition text-sm text-white font-bold" 

style="background-color: ${rang}">
    <td class="px-4 py-3 w-[100px] font-semibold border">
        ${item.id}
    </td>
    <td class="px-4 py-3 w-[100px] font-semibold border">
        ${item.clients.name}
    </td>
    <td class="px-4 py-3 w-[100px] border">
        ${item.user.phone}
    </td>
    <td class="px-4 py-3 w-[100px] truncate border" title="${item.description}">
        ${item.description}
    </td>
    <td class="px-4 py-3 w-[100px] font-bold border text-center">
        ${item.amount}
    </td>
    <td class="px-4 py-3 w-[100px] opacity-80 border">
        ${new Date(item.createdAt).toLocaleDateString()}
    </td>
    <td class="px-4 py-3 w-[100px] font-semibold border text-right">
        ${item.soldo}
    </td>
    <td class="px-4 py-3 w-[100px] border text-center">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold
            ${item.status ? 'bg-red-500/90 text-white' : 'bg-green-500/90 text-white'}">
            ${item.status ? 'to‘lanmadi' : 'to‘landi'}
        </span>
    </td>



</tr>
`
            })
        })
        .catch(err => console.error(err))
}


getdepts()