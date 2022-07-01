import { heroes } from "../data/heroes"

export const getHeroById = (heroId)=>{

    return heroes.find(hero=> {
        return hero.id==heroId
    });
}