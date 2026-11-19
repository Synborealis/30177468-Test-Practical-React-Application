import "dotenv/config";
import prisma from "../lib/prisma";
import { disconnect } from "process";

async function main () {
    await prisma.ingredient.deleteMany();
    await prisma.nutrition.deleteMany();
    await prisma.recipe.deleteMany();
    await prisma.cookbook.deleteMany();
    await prisma.chef.deleteMany();

    // Chefs
    const rosaBell = await prisma.chef.create({
        data: {
            name: "Rosa Bell",
            speciality: "Seafood",
            town: "Brixham",
        },
    });

    const tomAsante = await prisma.chef.create({
        data: {
            name: "Tom Asante",
            speciality: "Street Food",
            town: "Exeter",
        },
    });

    const meganPryce = await prisma.chef.create({
        data: {
            name: "Megan Pryce",
            speciality: "Baking",
            town: "Newton Abbot",
        },
    });

    // Cookbooks
    const catchOfTheDay = await prisma.cookbook.create({
        data: {
            title: "Catch of the day", 
            publishedYear: 2021, 
            chefId: rosaBell.id 
        },
    });

    const harbourSuppers = await prisma.cookbook.create({
        data: {
            title: "Harbour Suppers", 
            publishedYear: 2024, 
            chefId: rosaBell.id 
        },
    });

    const fireAndSpice = await prisma.cookbook.create({
        data: {
            title: "Fire and Spice", 
            publishedYear: 2023, 
            chefId: tomAsante.id 
        },
    });

    const risingSlowly = await prisma.cookbook.create({
        data: {
            title: "Rising Slowly", 
            publishedYear: 2025, 
            chefId: meganPryce.id 
        },
    });

    // recipes
    const crabLinguine = await prisma.recipe.create({
        data: {
            title: "Crab Linguine", 
            pageNumber: 14, 
            cookingMinutes: 25,
            cookBookId: catchOfTheDay.id 
        },
    });

    const mackerelToast = await prisma.recipe.create({
        data: {
            title: "Mackerel on Toast", 
            pageNumber: 22, 
            cookingMinutes: 15,
            cookBookId: catchOfTheDay.id 
        },
    });

    const ciderMussels = await prisma.recipe.create({
        data: {
            title: "Cider Mussels", 
            pageNumber: 31, 
            cookingMinutes: 20,
            cookBookId: catchOfTheDay.id 
        },
    });

    const fishPie = await prisma.recipe.create({
        data: {
            title: "Brixham Fish Pie", 
            pageNumber: 18, 
            cookingMinutes: 60,
            cookBookId: harbourSuppers.id 
        },
    });

    const scallops = await prisma.recipe.create({
        data: {
            title: "Seared Scallops", 
            pageNumber: 40, 
            cookingMinutes: 10,
            cookBookId: harbourSuppers.id 
        },
    });

    const jerkChicken = await prisma.recipe.create({
        data: {
            title: "Jerk Chicken", 
            pageNumber: 12, 
            cookingMinutes: 90,
            cookBookId: fireAndSpice.id 
        },
    });

    const chickpeaCurry = await prisma.recipe.create({
        data: {
            title: "Chickpea Curry", 
            pageNumber: 27, 
            cookingMinutes: 40,
            cookBookId: fireAndSpice.id 
        },
    });

    //Nutrition

    const crabLabel = await prisma.nutrition.create({
        data: {
            recipeId: crabLinguine.id,
            calories: 610,
            saltGrams: 2.1,
            },
    });

    const fishLabel = await prisma.nutrition.create({
        data: {
            recipeId: fishPie.id,
            calories: 540,
            saltGrams: 1.8,
            },
    });

    const ChickenLabel = await prisma.nutrition.create({
        data: {
            recipeId: jerkChicken.id,
            calories: 480,
            saltGrams: 2.4,
            },
    });

    const ChickpeaLabel = await prisma.nutrition.create({
        data: {
            recipeId: chickpeaCurry.id,
            calories: 390,
            saltGrams: 1.3,
            },
    });

    const musselsLabel = await prisma.nutrition.create({
        data: {
            recipeId: ciderMussels.id,
            calories: 350,
            saltGrams: 1.9,
            },
    });

    //Ingredient

    const garlic = await prisma.ingredient.create({
        data: {
            name: "Garlic",
            allergen: "None",
            recipe: { connect: [{ id: crabLinguine.id}, { id: jerkChicken.id}, { id: chickpeaCurry.id}, { id: ciderMussels.id} ] }
        },
    });

    const butter = await prisma.ingredient.create({
        data: {
            name: "Butter",
            allergen: "Milk",
            recipe: { connect: [{ id: mackerelToast.id}, { id: fishPie.id}, { id: scallops.id}, { id: ciderMussels.id} ] }
        },
    });

    const wheatFlour = await prisma.ingredient.create({
        data: {
            name: "Wheat Flour",
            allergen: "Gluten",
            recipe: { connect: [{ id: crabLinguine.id}, { id: fishPie.id}, ] }
        },
    });

    const chilli = await prisma.ingredient.create({
        data: {
            name: "Chilli",
            allergen: "None",
            recipe: { connect: [{ id: crabLinguine.id}, { id: jerkChicken.id}, { id: chickpeaCurry.id} ] }
        },
    });

    const peanuts = await prisma.ingredient.create({
        data: {
            name: "Peanuts",
            allergen: "Peanuts",
        },
    });

    const cream = await prisma.ingredient.create({
        data: {
            name: "Double Cream",
            allergen: "Milk",
            recipe: { connect: [{ id: fishPie.id} ] }
        },
    });

    







    console.log("Seeding finished.");
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect())