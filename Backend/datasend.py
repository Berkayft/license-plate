import aiohttp
import asyncio
import json

class ServerSender:
    def __init__(self):
        self.headers = {
            'secretkey': '3528f2597f9d843de5bc4beb2fcf4edbe506c86fc8e723f93696e99aa226e302',
            'Content-Type': 'application/json'
        }

    async def send_to_server(self, data):
        async with aiohttp.ClientSession() as session:
            async with session.post('http://localhost:3000/set', headers=self.headers, json=data) as response:
                if response.status == 201:
                    print('Lisanslar başarıyla eklendi.')
                    return 201
                else:
                    print(f'Error: {response.status} {response.reason}')
                    return 404
