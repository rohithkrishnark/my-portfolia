import React, { memo } from 'react'


import react from '../assets/skills/physics.png';
import bootstrap from '../assets/skills/bootstrap (1).png';
import css from '../assets/skills/css-3.png';
import html from '../assets/skills/html-5.png';
import docker from '../assets/skills/docker.png';
import apche from '../assets/skills/icons8-apache-kafka-256.png';
import kubernetes from '../assets/skills/icons8-kubernetes-480.png';
import tailwind from '../assets/skills/icons8-tailwind-css-96.png';
import mongodb from '../assets/skills/icons8-mongodb-480.png';
import js from '../assets/skills/js_5968292.png';
import mysql from '../assets/skills/mysql_919836.png';
import native from '../assets/skills/physics_753244.png';
import node from '../assets/skills/icons8-nodejs-480.png';
import GitHub from '../assets/skills/icons8-github-500.png';
import vscode from '../assets/skills/icons8-visual-studio-240.png';
import canva from '../assets/skills/icons8-canva-240.png';
import npm from '../assets/skills/icons8-npm-96.png';
import aws from '../assets/skills/icons8-aws-480.png';

const images = [react, node, html, mysql, mongodb, tailwind, js, bootstrap, css, native,]
const tools = [GitHub, docker, vscode, canva,npm]
const Learning = [apche, kubernetes,aws]


const SkillHolders = ({ selecteditem }) => {
    const mapItem = selecteditem === 1 ? images : selecteditem === 2 ? tools : Learning;
    return (
        <>
            {
                mapItem?.map((item, index) => {
                    return (
                        <div key={index} className='md:w-[90px] w-[50px]  h-[50px] md:h-[90px] bg-white shadow rounded-lg flex items-center justify-center block '>
                            <img src={item} alt="Image 1" className="md:w-[50px] w-[30px] md:h-[50px] h-[30px] transition-all duration-500 transform md:hover:w-[80px] hover:w-[40px] md:hover:h-[80px] hover:h-[40px] hover:rotate-[360deg]" />
                        </div>
                    )
                })
            }
        </>
    )
}

export default memo(SkillHolders)
