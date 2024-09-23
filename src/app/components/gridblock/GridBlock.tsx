import React from 'react'
import { Container } from 'react-bootstrap'

type Props = {
    containerClass?: string,
    LinesContainerClassName?: string,
    main?: boolean,
    children: React.ReactNode
    hideBottomLine?: boolean,
    hideInnerLines?: boolean,
}

export default function GridBlock({children, main, containerClass, hideBottomLine=false, hideInnerLines=false, LinesContainerClassName}: Props) {    
    return (
        <div className={`grid-section ${main ? 'main-grid' : ''} ${containerClass ? containerClass : ''}`}>
            <div className="horizontal-dashed-line" />
            <div className="layout-overlay-container">
                <Container className={`container-full-height ${LinesContainerClassName ? LinesContainerClassName : ''}`}>
                    <div className="layout-overlay-inner-container">
                        <div className="vertical-dashed-line" />
                            <div className="flex vertical-line-center">
                                <div className="vertical-dashed-line" />
                                <div className="vertical-dashed-line mh-50" />
                                <div className="vertical-dashed-line" />
                            </div>
                        <div className="vertical-dashed-line" />
                    </div>
                </Container>
            </div>
            {hideInnerLines &&
                <div className='overlay-hide-container'>
                    <Container className='container-full-height'>
                        <div className={`inner-lines-overlay ${hideInnerLines ? 'hideInnerLines' : '' }`}></div>
                    </Container>
                </div>
            }
            <Container className="grid-container">
                {children}
            </Container>
            {hideBottomLine === false &&
                <div className="horizontal-dashed-line" />
            }
        </div>
    );
}