const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abiringira:abiringira@survey.bnohfjm.mongodb.net/?retryWrites=true&w=majority'); 

const Schema = mongoose.Schema;

const informationSchema = new Schema({
	date: { type:String },
	village: { type:String },
	sector: { type:String },
	disctrict: { type:String },
	province: { type:String },
    name: { type:String },
    Age: { type:String },
    gender: { type:String },
    contact: { type:String },
    disability: { type:String },
    occupation: { type:String },
    position: { type:String },
    experience: { type:String },
    qualification: { type:String },


  //3.	Specific questions to dairy cattle farmers
    dairyFarmingOccupation: { type:String, required:false },
    dairyAnimals: {type: Number,required:false},
    housingSystemType: { type:String, required:false },
    breedOfDairyCattle: { type:String, required:false },
    averageProductionMilkPerDay: {type: Number,required:false},
    milkProductionSatisfaction: {type: String,required:false},
    milkRegularMarket: {type: String,required:false},
    dairyCattleMonthlyIncome: {type: Number,required:false},
    competitorsComparison: {type: String,required:false},
    isFacingSellingMilk: {type: Boolean,required:false},
    marketOutletPreference: {type: String,required:false},
    technicalContraints: {type: String,required:false},
    isHavingStaff: {type: Boolean,required:false},
    numberOfStaff: {type: Number,required:false},
    typeOfStaff: {type: String,required:false},
    gettingCompetentWorker: {type: String,required:false},
    technicalChallenges: {type: String,required:false},
    specificSkillsWorkersNeeded: {type: String,required:false},
    hasWomenYouthDairyCattleChallenges: {type: Boolean,required:false},
    womenYouthChallengeExample: {type: String,required:false},
    hasPersonWithDisability: {type: Boolean,required:false},
    personsWithDisability: {type: Number,required:false},
    hasExpansionPlanning: {type: Boolean,required:false},
    hasRecruitmentPlanning: {type: Boolean,required:false},
    hasHiringRequirement: {type: Boolean,required:false},
    hiringRequirements: {type: String,required:false},
    hiringPositions: {type: String,required:false},



    //4.	Specific question to Milk Collection Centre (MCC)/Milk Processing unit
     mccProccessingUnitName: { type:String, required:false },
     mccStaffNumber: {type: Number,required:false},
     mccMilkAverage: { type:Number, required:false },
     mccTechnicalContraints: { type:String, required:false },
     hasMccPersonWithDisability: {type: Boolean,required:false},
     mccPersonWithDisability: {type: Number,required:false},
     hasMccExpansionPlanning: {type: Boolean,required:false},
     hasMccRecruitmentPlanning: {type: Boolean,required:false},
     hasMccHiringRequirement: {type: Boolean,required:false},
     mccHiringRequirements: {type: String,required:false},
     mccHiringPositions: {type: String,required:false},



     //5.	Specific questions to pig farmers
    pigFarmingOccupation: { type:String, required:false },
    pigNumbers: {type: Number,required:false},
    pigBreeds: { type:String, required:false },
    monthlyPigsAverage: { type:String, required:false },
    hasPigRegularMarket: {type: Boolean,required:false},
    pigMonthlyIncome: {type: Number,required:false},
    pigsCompetitorsComparison: {type: String,required:false},
    isFacingSellingPigs: {type: Boolean,required:false},
    pigsMarketOutletPreference: {type: String,required:false},
    pigsTechnicalContraints: {type: String,required:false},
    isPigsHavingStaff: {type: Boolean,required:false},
    pigsNumberOfStaff: {type: Number,required:false},
    pigsTypeOfStaff: {type: String,required:false},
    pigsGettingCompetentWorker: {type: String,required:false},
    pigsTechnicalChallenges: {type: String,required:false},
    pigsSpecificSkillsWorkersNeeded: {type: String,required:false},
    hasPigsWomenYouthDairyCattleChallenges: {type: Boolean,required:false},
    pigsWomenYouthChallengeExample: {type: String,required:false},
    hasPigsPersonWithDisability: {type: Boolean,required:false},
    pigsPersonsWithDisability: {type: Number,required:false},
    hasPigsExpansionPlanning: {type: Boolean,required:false},
    hasPigsRecruitmentPlanning: {type: Boolean,required:false},
    hasPigsHiringRequirement: {type: Boolean,required:false},
    pigsHiringRequirements: {type: String,required:false},
    pigsHiringPositions: {type: String,required:false},

    //	6.	Specific questions to poultry farmers
    poultryFarmingOccupation: { type:String, required:false },
    birdsNumbers: {type: Number,required:false},
    poultryBreeds: { type:String, required:false },
    monthlyPoultryAverage: { type:String, required:false },
    hasPoultryRegularMarket: {type: Boolean,required:false},
    poultryMonthlyIncome: {type: Number,required:false},
    poultryCompetitorsComparison: {type: String,required:false},
    isFacingSellingEggs: {type: Boolean,required:false},
    poultryMarketOutletPreference: {type: String,required:false},
    poultryTechnicalContraints: {type: String,required:false},
    isPoultryHavingStaff: {type: Boolean,required:false},
    poultryNumberOfStaff: {type: Number,required:false},
    poultryTypeOfStaff: {type: String,required:false},
    poultryGettingCompetentWorker: {type: String,required:false},
    poultryTechnicalChallenges: {type: String,required:false},
    poultrySpecificSkillsWorkersNeeded: {type: String,required:false},
    hasPoultryWomenYouthDairyCattleChallenges: {type: Boolean,required:false},
    poultryWomenYouthChallengeExample: {type: String,required:false},
    hasPoultryPersonWithDisability: {type: Boolean,required:false},
    poultryPersonsWithDisability: {type: Number,required:false},
    hasPoultryExpansionPlanning: {type: Boolean,required:false},
    hasPoultryRecruitmentPlanning: {type: Boolean,required:false},
    hasPoultryHiringRequirement: {type: Boolean,required:false},
    poultryHiringRequirements: {type: String,required:false},
    poultryHiringPositions: {type: String,required:false},



    // 7.	Specific questions to rabbit farmers 
    goatFarmingOccupation: { type:String, required:false },
    goatsNumbers: {type: Number,required:false},
    goatsBreeds: { type:String, required:false },
    monthlyGoatsAverage: { type:String, required:false },
    hasGoatRegularMarket: {type: Boolean,required:false},
    goatMonthlyIncome: {type: Number,required:false},
    goatCompetitorsComparison: {type: String,required:false},
    isFacingSellingGoats: {type: Boolean,required:false},
    goatMarketOutletPreference: {type: String,required:false},
    goatTechnicalContraints: {type: String,required:false},
    isGoatHavingStaff: {type: Boolean,required:false},
    goatNumberOfStaff: {type: Number,required:false},
    goatTypeOfStaff: {type: String,required:false},
    goatGettingCompetentWorker: {type: String,required:false},
    goatTechnicalChallenges: {type: String,required:false},
    goatSpecificSkillsWorkersNeeded: {type: String,required:false},
    hasGoatWomenYouthDairyCattleChallenges: {type: Boolean,required:false},
    goatWomenYouthChallengeExample: {type: String,required:false},
    hasGoatPersonWithDisability: {type: Boolean,required:false},
    goatPersonsWithDisability: {type: Number,required:false},
    hasGoatExpansionPlanning: {type: Boolean,required:false},
    hasGoatRecruitmentPlanning: {type: Boolean,required:false},
    hasGoatHiringRequirement: {type: Boolean,required:false},
    goatHiringRequirements: {type: String,required:false},
    goatHiringPositions: {type: String,required:false},

    //	8.	Specific questions to small ruminant farmers (Tick if goat or sheep farming)
    rabbitFarmingOccupation: { type:String, required:false },
    rabbitsNumbers: {type: Number,required:false},
    rabbitsBreeds: { type:String, required:false },
    monthlyRabbitsAverage: { type:String, required:false },
    hasRabbitRegularMarket: {type: Boolean,required:false},
    rabbitMonthlyIncome: {type: Number,required:false},
    rabbitCompetitorsComparison: {type: String,required:false},
    isFacingSellingRabbits: {type: Boolean,required:false},
    rabbitMarketOutletPreference: {type: String,required:false},
    rabbitTechnicalContraints: {type: String,required:false},
    isRabbitHavingStaff: {type: Boolean,required:false},
    rabbitNumberOfStaff: {type: Number,required:false},
    rabbitTypeOfStaff: {type: String,required:false},
    rabbitGettingCompetentWorker: {type: String,required:false},
    rabbitTechnicalChallenges: {type: String,required:false},
    rabbitSpecificSkillsWorkersNeeded: {type: String,required:false},
    hasRabbitWomenYouthDairyCattleChallenges: {type: Boolean,required:false},
    rabbitWomenYouthChallengeExample: {type: String,required:false},
    hasRabbitPersonWithDisability: {type: Boolean,required:false},
    rabbitPersonsWithDisability: {type: Number,required:false},
    hasRabbitExpansionPlanning: {type: Boolean,required:false},
    hasRabbitRecruitmentPlanning: {type: Boolean,required:false},
    hasRabbitHiringRequirement: {type: Boolean,required:false},
    rabbitHiringRequirements: {type: String,required:false},
    rabbitHiringPositions: {type: String,required:false},


     //	9.	Specific questions to small ruminant farmers (Tick if goat or sheep farming)
     rabbitFarmingOccupation: { type:String, required:false },
     rabbitsNumbers: {type: Number,required:false},
     rabbitsBreeds: { type:String, required:false },
     monthlyRabbitsAverage: { type:String, required:false },
     hasRabbitRegularMarket: {type: Boolean,required:false},
     rabbitMonthlyIncome: {type: Number,required:false},
     rabbitCompetitorsComparison: {type: String,required:false},
     isFacingSellingRabbits: {type: Boolean,required:false},
     rabbitMarketOutletPreference: {type: String,required:false},
     rabbitTechnicalContraints: {type: String,required:false},
     isRabbitHavingStaff: {type: Boolean,required:false},
     rabbitNumberOfStaff: {type: Number,required:false},
     rabbitTypeOfStaff: {type: String,required:false},
     rabbitGettingCompetentWorker: {type: String,required:false},
     rabbitTechnicalChallenges: {type: String,required:false},
     rabbitSpecificSkillsWorkersNeeded: {type: String,required:false},
     hasRabbitWomenYouthDairyCattleChallenges: {type: Boolean,required:false},
     rabbitWomenYouthChallengeExample: {type: String,required:false},
     hasRabbitPersonWithDisability: {type: String,required:false},
     rabbitPersonsWithDisability: {type: Number,required:false},
     hasRabbitExpansionPlanning: {type: Boolean,required:false},
     hasRabbitRecruitmentPlanning: {type: Boolean,required:false},
     hasRabbitHiringRequirement: {type: Boolean,required:false},
     rabbitHiringRequirements: {type: String,required:false},
     rabbitHiringPositions: {type: String,required:false},





 

});



const Information  = mongoose.model('Information', informationSchema);

exports.createUser = (userInfo) => {
	const information = new Information(userInfo);
	return information.save();
           };
