import React from 'react'
import { useEffect, useState } from "react";

const Card = ({ el, gradient, color}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [moves, setMoves] = useState([]);

    useEffect(() => {
        if (el.moves?.length) {
            const shuffled = [...el.moves].sort(() => 0.5 - Math.random());
            setMoves(shuffled.slice(0, 2));
        }
    }, [el.moves]);


    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`h-95 w-65 bg-linear-to-r ${gradient} p-5 shadow-lg text-white  rounded-2xl flex flex-col relative`}>
            <div className='top w-full p-4 px-4 flex justify-between'>
                <h2><i>{el.base_experience} BE</i></h2>
                <i className="ri-heart-2-line"></i>
            </div>
            <h1 className={`bg-linear-to-r from-${color}-500 to-[#ffffffbe] flex mx-auto px-2 py-1 rounded-xl w-fit text-3xl border-2  border-${color}-400`}>{el.name}</h1>
            <div className='flex flex-col gap-3 absolute right-5 top-37'>
                <div className='border-2 p-1 rounded-2xl border-white/40 bg-white/15'>
                    <h3 className='text-[15px] font-bold relative z-10 '>height</h3>
                    <h5 className='font-semibold relative z-10'>{el.height}m</h5>
                </div>
                <div className='border-2 p-1 rounded-2xl border-white/40 bg-white/15'>
                    <h3 className='text-[15px] font-semibold relative z-10'>weight</h3>
                    <h5 className='font-semibold relative z-10'>{el.weight}kg</h5>
                </div>
            </div>

            <div className='flex flex-col gap-2 absolute right-2 bottom-2 justify-center'>
                <h4 className='relative z-10 font-bold text-[15px] text-center mb-2'>Moves</h4>
                <div className="flex gap-1">
                    {moves.map((m) => (
                        <span
                            key={m.move.name}
                            className={`border border-${color}-300 bg-white/15
                         text-[10px] px-2 py-1 rounded-xl
                         shadow-md shadow-emerald-900/30 relative z-10`}
                        >
                            {m.move.name}
                        </span>
                    ))}
                </div>
            </div>
            <img className='absolute right-19 top-20 h-full w-full transition-all duration-300' src={isHovered ? el.sprites.front_shiny : el.sprites.back_default} alt={el.name} />
        </div>
    )
}

export default Card
