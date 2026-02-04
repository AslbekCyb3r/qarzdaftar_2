 let clients = document.getElementById('clients')
        const api = 'http://213.230.108.224:49304/api/v1/'

        function getclients() {
            axios.get(api + "client")
                .then(response => {
                    clients.innerHTML = ""
                    response.data.forEach(item => {
                        clients.innerHTML += `
                        <tr class="hover:bg-gray-50 transition">
                            <td class="px-6 py-4 text-sm text-gray-700">${item.id}</td>
                            <td class="px-6 py-4 font-medium text-gray-900">${item.name}</td>
                            <td class="px-6 py-4 text-gray-700">${item.phone}</td>
                            <td class="px-6 py-4 text-gray-700">${item.createdAt}</td>
                        </tr>
                        `
                    })
                })
                .catch(err => {
                    console.error(err)
                })
        }

        getclients()

      