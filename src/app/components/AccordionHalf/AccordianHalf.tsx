'use client'
import React from 'react'
import GridBlock from '@/app/components/gridblock/GridBlock';
import { Accordion } from 'react-bootstrap';
import { FiArrowDownRight } from "react-icons/fi";
import { FiCornerRightDown } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./accordionSlide.module.css"
import Link from 'next/link';

type AccordionData = {
    title: string;
    subTitle: string;
    link: string;
    linkInfo: string;
    index?: string;
    info: string[];
};

type AccordionSlideProps = {
    containerClass?: string;
    data: AccordionData[];
    defaultOpen?: string;
}

const AccordianHalf = ({containerClass, data, defaultOpen}: AccordionSlideProps) => {
    return (
        <section className={`${styles.HalfAccordionsection} ${containerClass}`}>
            <div className={`${styles.titleContainerMobile}`}>
                WHAT WE DO
            </div>
            {data.map((item, i)=> {
                const lastIndex = data.length -1 === i;
                const firstIndex = i === 0;
                return (
                    <GridBlock key={i.toString()} containerClass={`m-block-45 ${firstIndex ? 'mt-142' : lastIndex ? 'mb-142' : ''}`}>
                        <div className="flex-wrap column-sm">
                            <div className="flex1">
                                {firstIndex && 
                                    <div className={styles.worktitleContainerDesktop}>
                                        <FiArrowDownRight className={styles.bdArrowRed} />
                                        <div className="work-text">WHAT WE DO</div>
                                    </div>
                                }
                            </div>
                            <div className={styles.workListContainer}>
                                <div className={styles.workListItem}>
                                    <div className={styles.workIndex}>{item.index}</div>
                                    <Accordion className={styles.AccordionContainer} defaultActiveKey={defaultOpen ?? "-1"}>
                                        <Accordion.Item eventKey={`${i}`}>
                                            <Accordion.Header>
                                                <h2 className="title-h1">{item.title}</h2>
                                                <p>{item.subTitle}</p>
                                                <Link href={item.link} className={styles.seeMoreText} aria-labelledby={item.linkInfo}> 
                                                    <span>Learn More</span>
                                                    <FiArrowUpRight className={styles.learnMoreArrow} /> 
                                                </Link>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {item.info.map((data, i)=> {
                                                    return (
                                                        <p key={i.toString()} className={styles.accordianText}>{data}</p>
                                                    )
                                                })}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </GridBlock>
                );
            })}
        </section>
    )
}

export default AccordianHalf;
