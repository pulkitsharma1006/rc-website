const blogs = [
    { link: "Roadcast-believes-IoT-in-Transportation-can-mitigate-Cyberattacks.html", image: "blog_92", category: ["Social", "Technology", "Product"], title: "Roadcast believes IoT in Transportation can mitigate Cyberattacks", description: "The Internet of Things (IoT) is revolutionizing transportation, addressing challenges like slow tech adoption", readingTime: "04 min.", date: "March 24, 2025" },
    { link: "Track-Like-a-Woman-The-Instinct-That-Never-Fails.html", image: "blog_91", category: ["Social", "Technology", "Product"], title: "Track Like a Woman: The Instinct That Never Fails", description: "Ever wondered how women always know exactly where things are? That missing charger", readingTime: "06 min.", date: "March 07, 2025" },
    { link: "If-Shiva-Had-Gadgets-in-2025-Mahashivratri-Meets-Technology.html", image: "blog_90", category: ["Product"], title: "If Shiva Had Gadgets in 2025! Mahashivratri Meets Technology", description: "Mahashivratri is more than just a festival—it's a symbol of transformation", readingTime: "06 min.", date: "Feb 26, 2025" },
    { link: "Love-at-First-Drive-A-Man-His-Car-and-a-Perfect-Valentines-Date.html", image: "blog_89", category: ["Social"], title: "Love at First Drive: A Man, His Car, and a Perfect Valentine's Date", description: "Valentine’s Day is all about love, while most people are busy planning", readingTime: "06 min.", date: "Feb 14, 2025" },
    { link: "Kumbh-Where-spirituality-meets-modernity.html", image: "blog_88", category: ["Engineering"], title: "Kumbh - Where spirituality meets modernity.", description: "Remember the earlier decades when Bollywood movies", readingTime: "06 min.", date: "Feb 10, 2025" },
    { link: "How-A-Safe-And-Efficient-Transportation-System.html", image: "blog_87", category: ["Security"], title: "How A Safe And Efficient Transportation System Is The 'Cog In India's Tourism Wheel'", description: "India's cultural diversity is one of its most compelling", readingTime: "06 min.", date: "Jan 13, 2025" },
    { link: "Make-A-New-Year-Resolution.html", image: "blog_86", category: ["Compliance"], title: "Make A New Year Resolution 'NO MORE ROAD ACCIDENTS !'", description: "The New Year is one of the few universally celebrated events, connecting people across borders", readingTime: "06 min.", date: "Jan 01, 2025" },
    { link: "Jingle-Bells-Jingle-Bells-Jingle-All-the-Way.html", image: "blog_85", category: ["Company"], title: "JINGLE BELLS JINGLE BELLS JINGLE ALL THE WAY", description: "Come Christmas and it's the advent of a joyous occasion!", readingTime: "06 min.", date: "Dec 24, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_84", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "The-challenge-of-Inappropriate-and-Nuisance-Parking-How-Roadcast-has-parked-a-solution.html", image: "blog_83", category: ["Engineering"], title: "The challenge of Inappropriate and Nuisance Parking - How Roadcast has parked a solution !", description: "Development of cities and towns has resulted in an exponential population", readingTime: "06 min.", date: "Dec 13, 2024" },
    { link: "Can-drunken-driving-BE-AVOIDED.html", image: "blog_82", category: ["Engineering"], title: "Can drunken driving BE AVOIDED? Drunk Ahmedabad bizman rams Audi into 6 cars", description: "Road accidents are one of the biggest cause of deaths on Indian roads", readingTime: "06 min.", date: "Dec 05, 2024" },
    { link: "How-Technology-is-Revolutionizing-Holiday-Shopping-Stress-Free-Solutions-for-E-Commerce-Shoppers-and-Sellers.html", image: "blog_81", category: ["Engineering"], title: "How Technology is Revolutionizing Holiday Shopping: Stress-Free Solutions for E-Commerce Shoppers and Sellers", description: "The holidays bring joy, excitement, and stress. For e-commerce companies", readingTime: "06 min.", date: "Nov 15, 2024" },
    { link: "The-Secret-Sauce-for-Small-Businesses-How-Tech-is-Powering-Hyperlocal-Success.html", image: "blog_80", category: ["Engineering"], title: "The Secret Sauce for Small Businesses: How Tech is Powering Hyperlocal Success", description: "Remember the days when small businesses relied mainly on", readingTime: "06 min.", date: "Nov 06, 2024" },
    { link: "From-Local-to-Global-How-to-Conquer-Cross-Border-Logistics-Hurdles.html", image: "blog_79", category: ["Engineering"], title: "From Local to Global: How to Conquer Cross-Border Logistics Hurdles", description: "In today's globalized world, cross-border logistics plays a crucial role in", readingTime: "06 min.", date: "Sept 02, 2024" },
    { link: "The-Power-of-Predictive-Maintenance-in-Fleet-Management.html", image: "blog_78", category: ["Engineering"], title: "The Power of Predictive Maintenance in Fleet Management", description: "In today’s fast-paced logistics world, staying ahead of the curve is essential", readingTime: "06 min.", date: "Aug 07, 2024" },
    { link: "Shielding-Your-Fleet-Why-Cybersecurity-is-a-Game-Changer-for-Fleet-Management-Systems.html", image: "blog_77", category: ["Engineering"], title: "Shielding Your Fleet: Why Cybersecurity is a Game-Changer for Fleet Management Systems", description: "In today's digital age, cybersecurity is more important than ever, especially", readingTime: "-", date: "Aug 01, 2024" },
    { link: "The-Impact-of-E-commerce-Growth-on-the-Logistics-Industry.html", image: "blog_76", category: ["Engineering"], title: "The Impact of E-commerce Growth on the Logistics Industry", description: "In recent years, the e-commerce industry has experienced unprecedented growth transforming the way we", readingTime: "-", date: "July 25, 2024" },
    { link: "How-to-Save-Fuel-Costs-in-Logistics-Expert-Tips.html", image: "blog_75", category: ["Engineering"], title: "How to Save Fuel Costs in Logistics: Expert Tips", description: "In the ever-evolving world of logistics, fuel costs can often feel like a constant thorn in your side. With fluctuating", readingTime: "-", date: "July 17, 2024" },
    { link: "Logistics-101-Understanding-the-Basics-of-Supply-Chain-Management.html", image: "blog_74", category: ["Engineering"], title: "Logistics 101: Understanding the Basics of Supply Chain Management", description: "In the fast-paced world of commerce, logistics, and", readingTime: "-", date: "July 10, 2024" },
    { link: "The-Secret-Sauce-to-Unmatched-Customer-Satisfaction-Real-Time-Tracking.html", image: "blog_73", category: ["Engineering"], title: "The Secret Sauce to Unmatched Customer Satisfaction: Real-Time Tracking", description: "In today's fast-paced digital world, customer", readingTime: "-", date: "July 03, 2024" },
    { link: "Logistics-and-IT-How-Technology-Drives-Efficiency.html", image: "blog_72", category: ["Engineering"], title: "Logistics and IT: How Technology Drives Efficiency", description: "In the fast-paced world of logistics, the race to enhance efficiency and reduce costs", readingTime: "-", date: "June 25, 2024" },
    { link: "Unlocking-Supply-Chain-Potential-with-Innovative-IT-Solutions.html", image: "blog_71", category: ["Engineering"], title: "Unlocking Supply Chain Potential with Innovative IT Solutions", description: "In today’s fast-paced business environment, supply chain", readingTime: "-", date: "June 18, 2024" },
    { link: "The-Future-of-Sustainable-Deliveries-How-Innovation-Can-Green-the-Last-Mile.html", image: "blog_70", category: ["Engineering"], title: "The Future of Sustainable Deliveries: How Innovation Can Green the Last Mile", description: "In today's fast-paced world, consumers", readingTime: "-", date: "June 06, 2024" },
    { link: "From-Chaos-to-Clockwork-Unveiling-the-Power-of-AI-in-Logistics.html", image: "blog_69", category: ["Engineering"], title: "From Chaos to Clockwork: Unveiling the Power of AI in Logistics", description: "Imagine a world where deliveries arrive like clockwork, traffic jams become", readingTime: "-", date: "june 04, 2024" },
    { link: "Craft-Your-Apps-with-Finesse-How-Roadcast-Takes-Build-Variants-Beyond-the-Basics.html", image: "blog_68", category: ["Engineering"], title: "Craft Your Apps with Finesse: How Roadcast Takes Build Variants Beyond the Basics", description: "In the fast-paced world of app", readingTime: "-", date: "May 28, 2024" },
    { link: "Zooming-Towards-Tomorrow-The-Last-Mile-Delivery-Revolution-Takes-Flight.html", image: "blog_67", category: ["Engineering"], title: "Zooming Towards Tomorrow: The Last-Mile Delivery Revolution Takes Flight!", description: "Remember the days when waiting for", readingTime: "-", date: "May 22, 2024" },
    { link: "Same-Day-Delivery-The-Secret-Weapon-for-E-Commerce-Success.html", image: "blog_66", category: ["Engineering"], title: "Same-Day Delivery: The Secret Weapon for E-Commerce Success", description: "The days of having to wait weeks for that essential item are long gone", readingTime: "-", date: "May 14, 2024" },
    { link: "Future-Ready-Logistics-Strategies-for-Growth-and-Sustainability.html", image: "blog_65", category: ["Engineering"], title: "Future Ready Logistics: Strategies for Growth and Sustainability", description: "Navigating the complexities of today's logistics industry requires", readingTime: "-", date: "may 07, 2024" },
    { link: "5-Ways-AI-Can-Enhance-Your-Transport-Management-System.html", image: "blog_64", category: ["Engineering"], title: "5 Ways AI Can Enhance Your Transport Management System", description: "In an era driven by technological innovation, Artificial Intelligence (AI) has emerged", readingTime: "-", date: "Feb 19, 2024" },
    { link: "How-to-Grow-your-FMCG-Distribution.html", image: "blog_63", category: ["Engineering"], title: "How to Grow your FMCG Distribution?", description: "The FMCG sector accounts for the fourth-largest sector in the Indian economy with", readingTime: "-", date: "Feb 09, 2024" },
    { link: "Highway-Sector-Expansion-Fueling-Logistics-Advancement.html", image: "blog_62", category: ["Engineering"], title: "Highway Sector Expansion: Fueling Logistics Advancement", description: "India's infrastructure plays a pivotal role in shaping the country's economic", readingTime: "-", date: "Feb 02, 2024" },
    { link: "Roadcasts-Strive-for-a-Self-Reliant-Nation.html", image: "blog_61", category: ["Engineering"], title: "Roadcast's Strive for a Self-Reliant Nation", description: "Having recently commemorated our Nation’s 75th Republic Day, let's direct our focus", readingTime: "-", date: "Jan 27, 2024" },
    { link: "Driver-Monitoring-System.html", image: "blog_60", category: ["Engineering"], title: "Driver Monitoring System: Key Takeaways & Insights", description: "India bustles with a myriad of vehicular activities, where the constant movement", readingTime: "-", date: "Jan 19, 2024" },
    { link: "Elevating-Road-Safety-with-Advanced-Driver-Monitoring-System.html", image: "blog_59", category: ["Engineering"], title: "Elevating Road Safety with Advanced Driver Monitoring System", description: "Driver behaviour monitoring involves systematically tracking and analysing", readingTime: "-", date: "Jan 11, 2024" },
    { link: "Rupee-Payments-for-UAE-Oil.html", image: "blog_58", category: ["Engineering"], title: "Rupee Payments for UAE Oil: Impact on Indian Logistics", description: "India produced 30.49 Mt of crude petroleum in 2020-21, declining by 5.21% over the", readingTime: "-", date: "Jan 04, 2024" },
    { link: "Logistics-in-the-Season-of-Celebrations.html", image: "blog_57", category: ["Engineering"], title: "Logistics in the Season of Celebrations", description: "In India, the wedding season typically starts in November and continues with celebrations", readingTime: "-", date: "Dec 11, 2023" },
    { link: "How-To-Save-Costs-With-Transport-Management.html", image: "blog_56", category: ["Engineering"], title: "How To Save Costs With Transport Management?", description: "In the dynamic landscape of logistics, organisations continually seek ways", readingTime: "-", date: "04 Dec, 2023" },
    { link: "ULIP-Elevating-Logistics-Efficiency.html", image: "blog_55", category: ["Engineering"], title: "ULIP: Elevating Logistics Efficiency", description: "The logistics industry plays an important role in ensuring the seamless flow of goods and services, serving as a crucial backbone", readingTime: "-", date: "Nov 27, 2023" },
    { link: "Key-Trends-We-Are-Taking-to-2024.html", image: "blog_54", category: ["Engineering"], title: "Key Trends We Are Taking To 2024", description: "This year has been dynamic for the logistics industry, witnessing both favourable and adverse effects. As we approach the", readingTime: "-", date: "Nov 21, 2023" },
    { link: "Top-4-Logistics-Challenges-During-Seasonal-Changes.html", image: "blog_53", category: ["Engineering"], title: "Top 4 Logistics Challenges During Seasonal Changes", description: "Seasonal changes present a myriad of challenges for logistics operations", readingTime: "-", date: "Nov 17, 2023" },
    { link: "How-To-Make-Your-Vehicle-Street-Smart.html", image: "blog_52", category: ["Engineering"], title: "How To Make Your Vehicle Street Smart?", description: "In today's rapidly evolving world of transportation and technology", readingTime: "-", date: "Nov 14, 2023" },
    { link: "No-More-Parking-Challenges.html", image: "blog_51", category: ["Engineering"], title: "No More Parking Challenges!", description: "Dual parking is a frequent and widespread issue that plagues our daily routines, and the resulting road chaos is a glaring", readingTime: "-", date: "Nov 06, 2023" },
    { link: "Backing_Our_Delivery_Partners.html", image: "blog_50", category: ["Engineering"], title: "Backing Our Delivery Partners", description: "The festive season has arrived, igniting a surge in e-commerce sales and a corresponding spike in the demand", readingTime: "-", date: "Oct 31, 2023" },
    { link: "Carjacking-Prevention-by-GPS-Technology.html", image: "blog_49", category: ["Engineering"], title: "Carjacking Prevention by GPS Technology", description: "Carjacking, the act of forcibly taking a vehicle from its owner, remains a significant", readingTime: "-", date: "oct 13, 2023" },
    { link: "Why_are_EVs_Gaining_Tremendous_Momentum.html", image: "blog_48", category: ["Engineering"], title: "Why are EVs Gaining Tremendous Momentum?", description: "The transport industry is continuously evolving, leading to a complete overhaul", readingTime: "-", date: "Oct 10, 2023" },
    { link: "Fueling_Logistics_Growth_The_Impact_of_PM_Gati_Shakti.html", image: "blog_47", category: ["Engineering"], title: "Fueling Logistics Growth: The Impact of PM Gati Shakti", description: "With a burgeoning consumer market, technology sector, and an emphasis", readingTime: "-", date: "Oct 04, 2023" },
    { link: "AIs_Bridge_Across_Divides_Deliberating_Its_Impact.html", image: "blog_46", category: ["Engineering"], title: "AI's Bridge Across Divides: Deliberating Its Impact", description: "The multifaceted applications of technology and AI have sparked extensive debates.", readingTime: "-", date: "Sept 27, 2023" },
    { link: "Indias_Trade_and_Logistics_Potential_with_IMEE_EC.html", image: "blog_45", category: ["Engineering"], title: "India's Trade and Logistics Potential with IMEE EC", description: "The G20 summit has ushered in a series of initiatives, marking a departure", readingTime: "-", date: "Sept 22, 2023" },
    { link: "G20_Summit_in_New_Delhi_A_Catalyst_for_Global_Logistics_and_Innovations.html", image: "blog_44", category: ["Engineering"], title: "G20 Summit in New Delhi: A Catalyst for Global Logistics and Innovations", description: "The recent G20 summit held in New Delhi, India, brought together bureaucrats", readingTime: "-", date: "Sept 13, 2023" },
    { link: "India_Forging_the_Path_to_Logistics_Excellence.html", image: "blog_43", category: ["Engineering"], title: "India Forging the Path to Logistics Excellence", description: "India is on a mission to establish itself as a premier global logistics hub, a crucial", readingTime: "-", date: "07 Sept, 2023" },
    { link: "Equity_in_Motion_Bridging_Gender_Gap_in_the_Delivery_Industry.html", image: "blog_42", category: ["Engineering"], title: "Equity in Motion: Bridging Gender Gap in the Delivery Industry", description: "In our interconnected world, gender equality remains an ongoing global aspiration", readingTime: "-", date: "Aug 22, 2023" },
    { link: "How_are_E-Pharmacies_Boosting_their_Delivery_Business.html", image: "blog_41", category: ["Engineering"], title: "How are E-Pharmacies Boosting their Delivery Business?", description: "A growing number of Indians now have online access to e-pharmacies, with this trend", readingTime: "-", date: "Aug 16, 2023" },
    { link: "Embracing_the_Future_Enabling_IPv6_Support.html", image: "blog_40", category: ["Engineering"], title: "Embracing the Future: Enabling IPv6 Support", description: "IPv6 is the latest version of the Internet Protocol (IP) that provides unique", readingTime: "-", date: "Aug 04, 2023" },
    { link: "Every_Mile_Brings_a_Smile.html", image: "blog_39", category: ["Engineering"], title: "Every Mile Brings a Smile!", description: "According to a web based survey by Journal of Transport and Health, more than a third of riders have contracted health issues", readingTime: "-", date: "July 28, 2023" },
    { link: "Unlocking_Seamless_Coordination.html", image: "blog_38", category: ["Engineering"], title: "Unlocking Seamless Coordination", description: "In today's Indian business climate, logistics is critical; as sales expand due to several factors, so will the necessity to assure", readingTime: "-", date: "July 25, 2023" },
    { link: "Indias_Growth_Spurt_Unified_Delivery_Management_Portal.html", image: "blog_37", category: ["Engineering"], title: "India's Growth Spurt: Unified Delivery Management Portal", description: "Economic experts are forecasting a potential global growth slowdown due to various", readingTime: "-", date: "July 21, 2023" },
    { link: "The_Impacts_of_Monsoon_on_Hyperlocal_Deliveries_and_the_E-commerce_Industry.html", image: "blog_36", category: ["Engineering"], title: "The Impacts of Monsoon on Hyperlocal Deliveries and the E-commerce Industry", description: "The arrival of the monsoon season presents", readingTime: "-", date: "July 14, 2023" },
    { link: "Monsoon_Challenges_Technology_Solutions_for_Transportation_Resilience.html", image: "blog_35", category: ["Engineering"], title: "Monsoon Challenges: Technology Solutions for Transportation Resilience", description: "The monsoon season in many parts of the", readingTime: "-", date: "July 11, 2023" },
    { link: "Efficiency_Unleashed_Reducing_Summer_Transportation_Expenses.html", image: "blog_34", category: ["Engineering"], title: "Efficiency Unleashed - Reducing Summer Transportation Expenses", description: "Summer is a season that brings a unique set of challenges for transporters", readingTime: "-", date: "July 07, 2023" },
    { link: "Powering_Your_E-Commerce_Ascension.html", image: "blog_33", category: ["Engineering"], title: "Powering Your E-Commerce Ascension", description: "The rise of the e-commerce industry has transformed the way we shop", readingTime: "-", date: "June 30, 2023" },
    { link: "Streamlining_Logistics_Fleet_Management.html", image: "blog_32", category: ["Engineering"], title: "Streamlining Logistics Fleet Management", description: "Fleet management plays a pivotal role in the logistics industry, and optimising it is", readingTime: "-", date: "June 23, 2023" },
    { link: "The_Warehousing_Conundrum.html", image: "blog_31", category: ["Engineering"], title: "The Warehousing Conundrum", description: "The rise of e-commerce in India has brought a transformative shift in consumer shopping habits, spanning across various sectors. This paradigm", readingTime: "-", date: "June 20, 2023" },
    { link: "Electric_Fleet_Economics_The_Financial_Advantages.html", image: "blog_30", category: ["Engineering"], title: "Electric Fleet Economics: The Financial Advantages", description: "As it is widely recognized, the world has witnessed a growing shift towards", readingTime: "-", date: "June 16, 2023" },
    { link: "Electric_Fleets_A_Sustainable_Transportation_Solution.html", image: "blog_29", category: ["Engineering"], title: "Electric Fleets: A Sustainable Transportation Solution", description: "In recent years, the urgency to address climate change and reduce carbon", readingTime: "-", date: "June 13, 2023" },
    { link: "Surging_Online_Goods_Demand_Resolving_the_Challenge.html", image: "blog_28", category: ["Engineering"], title: "Surging Online Goods Demand: Resolving the Challenge", description: "The online delivery market in India is experiencing significant", readingTime: "-", date: "June 09, 2023" },
    { link: "Meeting_the_Online_Goods_Surge.html", image: "blog_27", category: ["Engineering"], title: "Meeting the Online Goods Surge", description: "India's e-commerce logistics industry is expected to surpass 10 billion shipments by FY28. This significant", readingTime: "-", date: "June 06, 2023" },
    { link: "Enhancing_Deliveries_With_Warehousing_Technologies.html", image: "blog_26", category: ["Engineering"], title: "Enhancing Deliveries With Warehousing Technologies", description: "As we know, logistic management systems play a crucial role in ensuring", readingTime: "-", date: "June 02, 2023" },
    { link: "Warehousing_A_Strategic_Backbone_in_Todays_Business_Landscape.html", image: "blog_25", category: ["Engineering"], title: "Warehousing: A Strategic Backbone in Today's Business Landscape", description: "The logistics sector is experiencing a notable upturn in 2023, evident", readingTime: "-", date: "May 30, 2023" },
    { link: "Fighting_Food_Waste_Tech's_Role_in_Reducing_Perishable_Loss.html", image: "blog_24", category: ["Engineering"], title: "Fighting Food Waste: Tech's Role in Reducing Perishable Loss", description: "Food waste poses a challenge globally as a staggering amount of food", readingTime: "-", date: "May 23, 2023" },
    { link: "Maintaining_Quality_and_Safety_Transporting_Perishable_Goods.html", image: "blog_23", category: ["Engineering"], title: "Maintaining Quality and Safety: Transporting Perishable Goods", description: "India is the world's second-largest producer of fruits and vegetables", readingTime: "-", date: "May 19, 2023" },
    { link: "Safeguarding_E-Goods_in_Transit_Strengthening_Supply_Chain_Security.html", image: "blog_22", category: ["Engineering"], title: "Safeguarding E-Goods in Transit: Strengthening Supply Chain Security", description: "E-goods play a pivotal role in driving", readingTime: "-", date: "May 16, 2023" },
    { link: "Transportation_of_E-Goods_Problems_and_Solutions.html", image: "blog_21", category: ["Engineering"], title: "Transportation of E-Goods: Problems and Solutions", description: "Imagine a world without smartphones, laptops, and all the amazing electronic devices that make our lives easier ", readingTime: "-", date: "May 12, 2023" },
    { link: "Maximising_Miles_Strategies_for_Fuel_Saving.html", image: "blog_20", category: ["Engineering"], title: "Maximising Miles: Strategies for Fuel Saving", description: "There has been a significant increase in fuel consumption in India, with a reported consumption of 222.30 million", readingTime: "-", date: "May 09, 2023" },
    { link: "Exploring_the_Root_Causes_of_Common_Fuel_Theft_and_How_to_Address_Them.html", image: "blog_19", category: ["Engineering"], title: "Exploring the Root Causes of Common Fuel Theft and How to Address Them", description: "In today’s competitive economic environment, an effective transport", readingTime: "-", date: "May 05, 2023" },
    { link: "Revolutionising_Logistics_The_Impact_of_ChatGPT_on_the_Industry.html", image: "blog_18", category: ["Engineering"], title: "Revolutionising Logistics: The Impact of ChatGPT on the Industry", description: "The logistics industry comprises numerous intricate processes, including transportation, storage, delivery, and distribution", readingTime: "-", date: "May 02, 2023" },
    { link: "4_Ways_to_Reduce_Doorstep_Cancellations.html", image: "blog_17", category: ["Engineering"], title: "4 Ways to Reduce Doorstep Cancellations", description: "When operating an ecommerce business, the likelihood of order cancellations is higher compared to traditional", readingTime: "-", date: "May 01, 2023" },
    { link: "India_Poised_for_Global_Leadership_in_FY23.html", image: "blog_16", category: ["Engineering"], title: "India Poised for Global Leadership in FY23", description: "India is emerging as one of the world's fastest-growing economies. With a population of over 1.3 billion and", readingTime: "-", date: "April 28, 2023" },
    { link: "India_Moves_6_Places_Up_on_World_Banks_Logistics_Index.html", image: "blog_15", category: ["Engineering"], title: "India Moves 6 Places Up on World Banks’ Logistics Index", description: "The improvement in India's logistics performance index is a positive indicator of the country's progress towards", readingTime: "-", date: "April 25, 2023" },
    { link: "How_Will_AI_Impact_the_Workforce.html", image: "blog_14", category: ["Engineering"], title: "How Will AI Impact the Workforce?", description: "As AI technology continues to advance, there is growing concern that it will eventually replace human workers in many industries.  While it can", readingTime: "-", date: "April 24, 2023" },
    { link: "Green _Logistics.html", image: "blog_13", category: ["Engineering"], title: "Green Logistics: The Link Between Sustainability and Competition", description: "With the increasing demand for fast and reliable delivery services, there is also a rising need for sustainable", readingTime: "-", date: "April 20, 2023" },
    { link: "How_Does_AI_Transform_the_Business_Landscape.html", image: "blog_12", category: ["Engineering"], title: "How Does AI Transform the Business Landscape?", description: "AI has brought a significant positive impact by automating and streamlining processes, thereby making operations more", readingTime: "-", date: "April 18, 2023" },
    { link: "Why_Choose_Digital_Warehousing.html", image: "blog_11", category: ["Engineering"], title: "Why Choose Digital Warehousing?", description: "Warehouse operators face significant challenges with supply chain disruptions that are beyond their control. However, they can still enhance the efficiency and visibility", readingTime: "-", date: "April 17, 2023" },
    { link: "Supply_Chain_Traceability_and_Ethical_Practices.html", image: "blog_10", category: ["Engineering"], title: "Supply Chain Traceability and Ethical Practices", description: "In today's globalized economy, products are often sourced and manufactured in multiple countries", readingTime: "-", date: "April 14, 2023" },
    { link: "Blockchain_Technology_Key_Features_and_Effects.html", image: "blog_9", category: ["Engineering"], title: "Blockchain Technology: Key Features and Effects", description: "Blockchain technology has gained immense popularity in recent years due to its potential to transform various", readingTime: "-", date: "April 11, 2023" },
    { link: "Industry_and_Government_Unite_to_Drive_Freight_Decarbonization_and_Innovation.html", image: "blog_8", category: ["Engineering"], title: "Industry and Government Unite to Drive Freight Decarbonization and Innovation", description: "Efforts to strengthen and revitalize the logistics sector are", readingTime: "-", date: "April 10, 2023" },
    { link: "Robotics_and_Automation_Revolutionising_the_Logistics_Industry.html", image: "blog_7", category: ["Engineering"], title: "Robotics and Automation: Revolutionising the Logistics Industry", description: "Unprecedented increase in the demand for various goods and services", readingTime: "-", date: "April 06, 2023" },
    { link: "Insights_from_the_World_Economic_Forum.html", image: "blog_6", category: ["Engineering"], title: "Insights from the World Economic Forum: Current & Emerging Trends in Logistics", description: "The logistics industry plays a significant role in contributing to the overall", readingTime: "-", date: "April 04, 2023" },
    { link: "Same_Day_Delivery_vs_Economic_Delivery.html", image: "blog_5", category: ["Engineering"], title: "Same Day Delivery vs Economic Delivery: What is More Important to Consumers?", description: "The potential of same-day delivery to revolutionise the way we shop", readingTime: "-", date: "April 03, 2023" },
    { link: "Lithium_Deposits_Found_in_Kashmir.html", image: "blog_4", category: ["Engineering"], title: "Lithium Deposits Found in Kashmir", description: "Lithium is a key component in the manufacturing of rechargeable batteries, particularly those used in electric vehicles (EVs). EVs are an upcoming mode of transportation", readingTime: "-", date: "Feb 22, 2023" },
    { link: "How_to_Ensure_a_Secure_Last Mile Delivery.html", image: "blog_3", category: ["Engineering"], title: "How to Ensure a Secure Last Mile Delivery?", description: "The last mile of delivery is often the most challenging part of the process. Delivery partners face a variety of problems when it comes to completing deliveries", readingTime: "-", date: "Feb 16, 2023" },
    { link: "Logistics-Automation-in-Fleet-Management.html", image: "blog_2", category: ["Engineering"], title: "Logistics Automation in Fleet Management", description: "In a world with more than 7 billion people, consumer demand is increasing day by day. In the logistics industry, nothing beats more than multifaceted services", readingTime: "-", date: "Feb 08, 2023" },
    { link: "Why-Last-Mile-Logistics-is-the-Need-of-the-Hour.html", image: "blog_1", category: ["Engineering"], title: "Why Last Mile Logistics is the Need of the Hour?", description: "Last mile logistics involves the culmination of a long process of transfer facilities and is the conclusive final thrust of consumer satisfaction", readingTime: "-", date: "Jan 30, 2023" },
];

let filteredBlogs = blogs;

function renderPaginatedBlogs(data) {
    const $blogContainer = $('#blog-container');
    $blogContainer.empty();

    data.forEach(blog => {
        const blogHtml = `
            <div class="bg-white shadow-md p-4 pb-8 rounded-xl border border-[#eeeeee]">
                <a href="/blog/${blog.link}" alt="${blog.title}" class="block">
                    <img src="/assets/images/blog/${blog.image}.jpg" alt="" class="w-full object-cover rounded-2xl mb-4">
                    <div class="min-h-28">
                        <h6 class="my-2 text-lg font-semibold text-[#0D0D12] line-clamp-2">${blog.title}</h6>
                        <p class="text-gray-600 text-sm line-clamp-2">${blog.description}</p>
                    </div>
                    <p class="text-gray-500 text-sm mt-3"><span class="font-semibold">Reading Time:</span> ${blog.readingTime} | ${blog.date}</p>
                </a>
            </div>
        `;
        $blogContainer.append(blogHtml);
    });
}

function renderPagination() {
    $('#pagination-container').pagination({
        dataSource: filteredBlogs,
        pageSize: 12,
        showPrevious: true,
        showNext: true,
        callback: function (data, pagination) {
            renderPaginatedBlogs(data);
        }
    });
}

// Category filter
function filterBlogs(category) {
    if (category) {
        filteredBlogs = blogs.filter(blog => blog.category.includes(category));
    } else {
        filteredBlogs = blogs;
    }
    renderPagination(); // refresh pagination after filter
}

function changeActiveClass(element) {
    // Remove active styles from all links
    const allLinks = document.querySelectorAll('.grid a');
    allLinks.forEach(link => {
        link.classList.remove('border-l', 'border-[#14A99C]', 'text-[#14A99C]');
        link.classList.add('text-[#818898]');
    });

    // Add active styles to the clicked one
    element.classList.add('border-l', 'border-[#14A99C]', 'text-[#14A99C]');
    element.classList.remove('text-[#818898]');
}


// Search filter
function applySearchFilter() {
    const query = $('#search-input').val().toLowerCase();
    const searched = filteredBlogs.filter(blog =>
        blog.title.toLowerCase().includes(query) ||
        blog.description.toLowerCase().includes(query)
    );
    $('#pagination-container').pagination('destroy'); // Remove previous pagination instance
    $('#pagination-container').pagination({
        dataSource: searched,
        pageSize: 6,
        showPrevious: true,
        showNext: true,
        callback: function (data, pagination) {
            renderPaginatedBlogs(data);
        }
    });
}

function setupSearchInput() {
    // Show/hide clear icon based on input
    $('#search-input').on('input', function () {
        const value = $(this).val();
        if (value.length > 0) {
            $('#clear-search').removeClass('hidden');
        } else {
            $('#clear-search').addClass('hidden');
        }
        applySearchFilter();
    });

    // Clear input and reset search on icon click
    $('#clear-search').on('click', function () {
        $('#search-input').val('');
        $(this).addClass('hidden');
        applySearchFilter();
    });
}



// Initial load
$(document).ready(function () {
    renderPagination();
    // Attach search handler
    $('#search-input').on('input', function () {
        applySearchFilter();
    });
    setupSearchInput(); // initialize search input behavior
});
