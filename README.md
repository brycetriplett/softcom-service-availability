# Customer servicability and onboarding tool
#### Site can be reached by going to https://softcom-service-availability.herokuapp.com
This application is linked on the softcom.net home page and in advertisements to check if a potential customer could be serviced by Softcom, and to log their information in order to connect them to our sales team. It accomplishes this by using a map service by towercoverage.com which gives us the ability to build maps that contain our different tower sites, and allows us to have different maps for different service tiers.

### Steps in the process

## Gather Customer Information
<img src="https://github.com/brycetriplett/softcom-service-availability/blob/main/github_pics/check_availability.png" alt="Alt text" width="400"></img><br>
The first step in the application simply asks for the potential customer's address and contact information. This is then sent to towercoverage.com's Multi Maps API where the address is checked against 3 different maps containing tower location coverages. Our overall coverage map, another map with locations that provide our mid-tier service plans, and another map with locations that provide our high-tier service plans.

## Ask for preferred service rate
<img src="https://github.com/brycetriplett/softcom-service-availability/blob/main/github_pics/present_options.png" alt="Alt text" width="400"></img><br>
The potential customer is now asked to choose a service plan that is available to them. If the potential customer's address falls into any of the 3 maps, their highest available rate will then be presented. If they don't fall into the overall coverage map, they are presented with no options and are offered to contact our customer service team to inquire about when service could be available to them.

## Store the customer information and present them with a receipt
<img src="https://github.com/brycetriplett/softcom-service-availability/blob/main/github_pics/present_order.png" alt="Alt text" width="400"></img><br><br>
Once the potential customer has chosen a preferred plan, that choice is sent over to towercoverage.com's EUS API, along with their address and contact information. This creates a uniquely numbered entry that can be seen by the sales team, and shows which specific tower sites are available to the customer on a map. They can then contact and onboard them into the billing platform and mark their entry as complete.<br><br>
<img src="https://github.com/brycetriplett/softcom-service-availability/blob/main/github_pics/towercoverage.png" alt="Alt text" width="1000"></img><br>
