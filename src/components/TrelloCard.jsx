import React, {Component} from 'react';

// ui
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {Draggable} from 'react-beautiful-dnd';

const TrelloCard = ({text, id, index}) => {
    return(
        <Draggable draggableId={String(id)} index={index}>
        {Provided => (
            <Card style={styles.cardContainer}>
                <div 
                    ref={provided.innerRef} 
                    {...provided.draggbleProps} 
                    {...provided.dragHandleProps} 
                >
                    <CardContent >
                        <Typography gutterBottom> {text} </Typography>
                    </CardContent>
                </div>
            </Card>
        )}
        </Draggable>
    )
}

const styles = {
    cardContainer: {
        marginBottom: 8,
    }
}

export default TrelloCard;