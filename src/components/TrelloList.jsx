import React, {Component} from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`

const TrelloList = ({title, cards, listID}) => {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
                <ListContainer
                    {...provided.droppableProps} 
                    ref={provided.innerRef}
                >
                    <h4>{title}</h4>
                    {
                        cards.map((card, index) => (
                            <TrelloCard 
                                key={card.id}  
                                text={card.text} 
                                id={card.id} 
                                index={index}
                            />
                        ))
                    }
                    <TrelloActionButton listID={listID} />
                    {provided.placeholder}
                </ListContainer>
            )}  
        </Droppable>
    )
}

const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
}

export default TrelloList;