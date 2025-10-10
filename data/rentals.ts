//data/rentals.ts

export interface RentalProperty {
    id: string;
    buildingName: string;
    price: string;
    unit: string;
    suite: string;
    balcony: string;
    total: string;
    companyLogo: string;
    companyName: string;
    projectDetails: string;
    galleryImages: string[];
    floorPlan: string;
    fullWidthImage: string;
    propertyFeatures: string[];
    embedUrl: string;
    categoryEmbeds: {
      schools: string;
      shop: string;
      dine: string;
      grocery: string;
      attractions: string;
    };
  }
  
  export const rentals: RentalProperty[] = [
    {
      id: "canal-bay",
      buildingName: "Canal Bay by Ned",
      price: "AED 1,200,000",
      unit: "3 BEDROOM + 2.5 BATHS + 1 BALCONY",
      suite: "1265.9 SQ.FT",
      balcony: "183.1 SQ.FT.",
      total: "1449.0 SQ.FT",
      companyLogo: "/images/rental/sobhaone-logo.png",
      companyName: "Azizi Developments",
      projectDetails:
        "Located in Business Bay, this brand new - ready for occupancy apartment building features state-of-the-art amenities and well-polished and elegantly crafted interior designs. Offering 2 and 3-bedroom apartments, Canal Bay offers a modern and luxurious living space for you and your loved ones.",
      galleryImages: [
        "/images/rental/canalbay/canalbay-1.jpeg",
        "/images/rental/canalbay/canalbay-2.jpeg",
        "/images/rental/canalbay/canalbay-3.jpeg",
        "/images/rental/canalbay/canalbay-4.jpeg",
        "/images/rental/canalbay/canalbay-5.jpeg",
        "/images/rental/canalbay/canalbay-6.jpeg",
        "/images/rental/canalbay/canalbay-7.jpeg",
        "/images/rental/canalbay/canalbay-8.jpeg",
        "/images/rental/canalbay/canalbay-9.jpeg",
        "/images/rental/canalbay/canalbay-10.jpeg",
        "/images/rental/canalbay/canalbay-11.jpeg",
        "/images/rental/canalbay/canalbay-12.jpeg",
        "/images/rental/canalbay/canalbay-13.jpeg",
        "/images/rental/canalbay/canalbay-14.jpeg",
        "/images/rental/canalbay/canalbay-15.jpeg",
        "/images/rental/canalbay/canalbay-16.jpeg",
        "/images/rental/canalbay/canalbay-17.jpeg",
        "/images/rental/canalbay/canalbay-19.jpeg",
        "/images/rental/canalbay/canalbay-20.jpeg",
      ],
      floorPlan: "/images/rental/canalbay/floorplan-1702.jpg",
      fullWidthImage: "/images/rental/building-exterior.jpg",
      propertyFeatures: [
        "8.5 Acres of Building Land Parcel",
        "18 Hole Pitch & Putt Golf Course",
        "4 Themed Courtyards",
        "Courtyard for the senses",
        "Dine By the waters",
        "Fully Furnished Apartment, ready to move",
      ],
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1234567890123!2d55.2678!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a2b1c3d4e5f%3A0x1234567890abcdef!2sBusiness%20Bay%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000001!5m2!1sen!2sae",
      categoryEmbeds: {
        schools: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3610.1234567890123!2d55.2678!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sschools%20near%20Business%20Bay%20Dubai!5e0!3m2!1sen!2sae!4v1700000001001!5m2!1sen!2sae",
        shop: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3610.1234567890123!2d55.2678!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshopping%20malls%20near%20Business%20Bay%20Dubai!5e0!3m2!1sen!2sae!4v1700000001002!5m2!1sen!2sae",
        dine: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3610.1234567890123!2d55.2678!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants%20near%20Business%20Bay%20Dubai!5e0!3m2!1sen!2sae!4v1700000001003!5m2!1sen!2sae",
        grocery: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3610.1234567890123!2d55.2678!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgrocery%20stores%20near%20Business%20Bay%20Dubai!5e0!3m2!1sen!2sae!4v1700000001004!5m2!1sen!2sae",
        attractions: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3610.1234567890123!2d55.2678!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sattractions%20near%20Business%20Bay%20Dubai!5e0!3m2!1sen!2sae!4v1700000001005!5m2!1sen!2sae"
      }
    },
    {
        id: "dunya-tower",
        buildingName: "Dunya Tower by Emirates Properties",
        price: "AED 1,200,000",
        unit: "3 BEDROOM + 3 BATHS + 2 BALCONY",
        suite: "1265.9 SQ.FT",
        balcony: "183.1 SQ.FT.",
        total: "1449.0 SQ.FT",
        companyLogo: "/images/rental/sobhaone-logo.png",
        companyName: "Azizi Developments",
        projectDetails:
          "Dunya Tower is the new modern residential project set within the magnificent Downtown Dubai. It is strategically located and connected to the prestigious DIFC, one of the world's main financial centers, Business Bay, Dubai's prime business hub, and flanked by the most iconic projects including the highest tower in the world Burj Khalifa, and the largest shopping mall in the world Dubai Mall, the Mall contains more than 1,200 shops with an area of 3.77 million Sqft.",
        galleryImages: [
          "/images/rental/downtown-img/downtown-1.jpeg",
          "/images/rental/downtown-img/downtown-2.jpeg",
          "/images/rental/downtown-img/downtown-3.jpeg",
          "/images/rental/downtown-img/downtown-4.jpeg",
          "/images/rental/downtown-img/downtown-5.jpeg",
          "/images/rental/downtown-img/downtown-6.jpeg",
          "/images/rental/downtown-img/downtown-7.jpeg",
          "/images/rental/downtown-img/downtown-8.jpeg",
          "/images/rental/downtown-img/downtown-9.jpeg",
          "/images/rental/downtown-img/downtown-10.jpeg",
          "/images/rental/downtown-img/downtown-11.jpeg",
          "/images/rental/downtown-img/downtown-12.jpeg",
          "/images/rental/downtown-img/downtown-13.jpeg",
          "/images/rental/downtown-img/downtown-14.jpeg",
          "/images/rental/downtown-img/downtown-15.jpeg",
          "/images/rental/downtown-img/downtown-16.jpeg",
          "/images/rental/downtown-img/downtown-17.jpeg",
          "/images/rental/downtown-img/downtown-19.jpeg",
          "/images/rental/downtown-img/downtown-20.jpeg",
        ],
        floorPlan: "/images/rental/downtown-img/floor-plan-104.jpg",
        fullWidthImage: "/images/rental/downtown-img/downtown-2.jpeg",
        propertyFeatures: [
          "Community to Play, Dine & Shop",
          "Utmost Comfort Inspired Interiors",
          "Tiled Roofs, Elegant Detailing & Spacious Layout",
          "Tranquility Lifestyle",
          "A Perfect Efficient Home Design",
        ],
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.9876543210987!2d55.2744!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a2b1c3d4e5f%3A0xabcdef1234567890!2sDowntown%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000002!5m2!1sen!2sae",
        categoryEmbeds: {
          schools: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3610.9876543210987!2d55.2744!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sschools%20near%20Downtown%20Dubai!5e0!3m2!1sen!2sae!4v1700000002001!5m2!1sen!2sae",
          shop: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3610.9876543210987!2d55.2744!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshopping%20malls%20near%20Downtown%20Dubai!5e0!3m2!1sen!2sae!4v1700000002002!5m2!1sen!2sae",
          dine: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3610.9876543210987!2d55.2744!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants%20near%20Downtown%20Dubai!5e0!3m2!1sen!2sae!4v1700000002003!5m2!1sen!2sae",
          grocery: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3610.9876543210987!2d55.2744!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgrocery%20stores%20near%20Downtown%20Dubai!5e0!3m2!1sen!2sae!4v1700000002004!5m2!1sen!2sae",
          attractions: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3610.9876543210987!2d55.2744!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sattractions%20near%20Downtown%20Dubai!5e0!3m2!1sen!2sae!4v1700000002005!5m2!1sen!2sae"
        }
      },
  ];
  