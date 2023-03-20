import requests
import json
import subprocess
import time

# Define a function to call the subprocess and update the CSV files
def update_listings():
    # Call the subprocess and get the JSON object response
    response = subprocess.check_output(f'run ./verus getoffers "VRSC" true false',shell=True)

    # Parse the JSON response into a Python object
    data = json.loads(response)
    with open("listings.json", "w") as jsonFile:
        for value in data["ids_for_currency_i5w5MuNik5NtLcYmNzcvaoixooEebB6MGV"]:
            price = value['price']
            name = value['offer']['offer']['name']
            expiry = value['offer']['blockexpiry']
            listing_data = {"price": price, "vrscId": name, "blockExpiry": expiry}
            url_post = "http://localhost:8080/listings/new"
            post_response = requests.post(url_post, json=listing_data)
            post_response_json = post_response.json()
            print(post_response_json)




# Call the update_csv() function once at the start of the script
update_listings()

# Call the update_csv() function every hour in perpetuity
while True:
    time.sleep(3600)  # Sleep for 1 hour (3600 seconds)
    update_listings()
