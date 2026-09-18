import type { Sector } from "../types";
import { IMAGES } from "./image";

export const SECTORS: Sector[] = [
  {
    id: "industrial",
    title: "Industrial",
    sector: "Industrial",
    region: "Global",
    image: IMAGES.industrial,
    description: "Robust and secure container solutions designed for harsh industrial environments and heavy-duty operations.",
    subcategories: [
      { name: "Factory site office container", image: IMAGES.factorySite },
      { name: "Control room container", image: IMAGES.controlRoomContainer },
      { name: "Equipment storage container", image: IMAGES.containerEquipmentStorage },
      { name: "Generator room container", image: IMAGES.generatorRoomContainer },
      { name: "Workshop container", image: IMAGES.workshopContainer },
      // { name: "Chemical storage container", image: IMAGES.chemicalStorage }
    ]
  },
  {
    id: "residential",
    title: "Residential",
    sector: "Residential",
    region: "Worldwide",
    image: IMAGES.residential,
    description: "Modern, sustainable, and customizable container homes designed for comfort and extended living spaces.",
    subcategories: [
      { name: "Container homes", image: IMAGES.containerHomes },
      { name: "Studio container houses", image: IMAGES.studioHouses },
      { name: "Labour accommodation containers", image: IMAGES.labourAccommodation },
      { name: "Portable toilets & bath containers", image: IMAGES.portableToilets },
      { name: "Worker dormitory containers", image: IMAGES.workerDormitory }
    ]
  },
  {
    id: "commercial",
    title: "Commercial",
    sector: "Commercial",
    region: "Global",
    image: IMAGES.commercial,
    description: "Flexible, stylish, and functional commercial container structures for modern businesses.",
    subcategories: [
      { name: "Office containers", image: IMAGES.officeContainers },
      { name: "Meeting room containers", image: IMAGES.meetingRoomContainers },
      { name: "Corporate workspace containers", image: IMAGES.corporateWorkspaceContainers },
      { name: "Sales office containers", image: IMAGES.salesOfficeContainers },
      { name: "Co-working container offices", image: IMAGES.coWorkingContainerOffices }
    ]
  },
  {
    id: "medical",
    title: "Medical",
    sector: "Medical",
    region: "Global",
    image: IMAGES.medical,
    description: "Hygienic, accessible, and rapidly deployable medical and healthcare container units.",
    subcategories: [
      { name: "Mobile clinic containers", image: IMAGES.mobileClinic },
      { name: "Diagnostic lab containers", image: IMAGES.diagonisticLabs },
      { name: "Emergency medical unit containers", image: IMAGES.emergengyMedicalcontainer },
      { name: "Pharmacy containers", image: IMAGES.pharmacyContainers },
      { name: "Isolation ward containers", image: IMAGES.isolationWardcontainer }
    ]
  },
  {
    id: "agricultural",
    title: "Agricultural",
    sector: "Agricultural",
    region: "Worldwide",
    image: IMAGES.agricultural,
    description: "Purpose-built container solutions for farming operations, storage, and agricultural processing.",
    subcategories: [
      { name: "Farm office containers", image: IMAGES.farmOffice },
      { name: "Cold storage containers", image: IMAGES.coldStorage },
      { name: "Seed storage containers", image: IMAGES.seedStorage },
      { name: "Equipment storage containers", image: IMAGES.equipmentStorage },
      { name: "Hydroponic farm containers", image: IMAGES.hydrofomicFarm }
    ]
  },
  {
    id: "infrastructure-construction",
    title: "Infrastructure & Construction",
    sector: "Infrastructure & Construction",
    region: "Global",
    image: IMAGES.infrastructureconstruction,
    description: "Durable and portable units essential for managing and supporting large-scale construction projects.",
    subcategories: [
      { name: "Construction site office", image: IMAGES.constructionSiteoffice },
      { name: "Security cabin containers", image: IMAGES.securityOfficecabin },
      { name: "Engineer office containers", image: IMAGES.engineerOffice },
      { name: "Worker rest room containers", image: IMAGES.workerRestroom },
      { name: "Material storage containers", image: IMAGES.materialStorage }
    ]
  },
  {
    id: "education",
    title: "Education",
    sector: "Education",
    region: "Worldwide",
    image: IMAGES.heroContainerOffice,
    description: "Safe, conducive, and fully equipped modular learning environments and educational facilities.",
    subcategories: [
      { name: "Portable classrooms", image: IMAGES.portableClassroom },
      { name: "Computer lab containers", image: IMAGES.computerLab },
      { name: "Library containers", image: IMAGES.libraryContainer },
      { name: "Training center containers", image: IMAGES.trainingCenter },
      { name: "Examination hall containers", image: IMAGES.examinationHall }

    ]
  },
  {
    id: "hospitality-tourism",
    title: "Hospitality & Tourism",
    sector: "Hospitality & Tourism",
    region: "Global",
    image: IMAGES.hospitalityTourism,
    description: "Unique, aesthetically pleasing, and comfortable container accommodations for the hospitality sector.",
    subcategories: [
      { name: "Container resorts", image: IMAGES.containerResorts },
      { name: "Container cottages", image: IMAGES.containerCottages },
      { name: "Container cafes", image: IMAGES.containerCafes },
      { name: "Container restaurants", image: IMAGES.containerRestaurants },
      { name: "Container guest rooms", image: IMAGES.containerGuestRooms }

    ]
  },
  {
    id: "retail-pop-up-stores",
    title: "Retail & Pop-Up Stores",
    sector: "Retail & Pop-Up Stores",
    region: "Global",
    image: IMAGES.containerShops,
    description: "Eye-catching and easily movable modules perfect for retail, exhibitions, and pop-up events.",
    subcategories: [
      { name: "Container showrooms", image: IMAGES.containerShowrooms },
      { name: "Container shops", image: IMAGES.containerShops },
      { name: "Mobile retail containers", image: IMAGES.mobileRetailContainers },
      { name: "Exhibition kiosk containers", image: IMAGES.exhibitionKioskContainers },
      { name: "Mall pop-up containers", image: IMAGES.mallPopUpContainers }


    ]
  },
  {
    id: "defence-government",
    title: "Defence & Government",
    sector: "Defence & Government",
    region: "Global",
    image: IMAGES.defencegovernment,
    description: "Highly secure, robust, and strategic container units tailored for defence and governmental operations.",
    subcategories: [
      { name: "Army accommodation containers", image: IMAGES.armyAccommodationContainers },
      { name: "Border security cabins", image: IMAGES.borderSecurityCabins },
      { name: "Disaster relief shelter containers", image: IMAGES.disasterReliefShelterContainers },
      { name: "Mobile command center containers", image: IMAGES.mobileCommandCenterContainers },
      { name: "Police outpost containers", image: IMAGES.policeOutpostContainers }



    ]
  },
  {
    id: "logistics-warehousing",
    title: "Logistics & Warehousing",
    sector: "Logistics & Warehousing",
    region: "Worldwide",
    image: IMAGES.logisticswarehousing,
    description: "Optimized, weather-resistant storage and warehousing units to streamline supply chain logistics.",
    subcategories: [
      { name: "Storage containers", image: IMAGES.storageContainers },
      { name: "Mini warehouse containers", image: IMAGES.miniWarehouseContainers },
      { name: "Distribution hub containers", image: IMAGES.distributionHubContainers },
      { name: "Refrigerated containers", image: IMAGES.refrigeratedContainers },
      { name: "Spare parts storage containers", image: IMAGES.sparePartsStorageContainers }


    ]
  }
];