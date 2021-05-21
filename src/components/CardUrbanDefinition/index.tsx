import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { ObjectUrban } from '../../interfaces/objectUrban.interface';

const CardUrbanDefinition = ({ definition }) => {
    const [definitionObject, setDefinitionObject] = useState({})

    useEffect(() => {
        if (Object.keys(definition).length > 0) {
            const obj: ObjectUrban = {
                definition: definition.definition.replace(/\[/g, '<strong>').replace(/\]/g, '</strong>'),
                example: definition.example.replace(/\n/g, "<br />")
            }
            setDefinitionObject(obj)
            // obj.example = definition.example
        }
        // return () => {
        //     cleanup
        // }
    }, [definition])
    return (
        <Card className="entrie_card">
            <CardContent>
                {Object.keys(definition).length > 0 &&
                    <div>
                        <Typography>
                            <strong>Definition:</strong>
                            {/* <p dangerouslySetInnerHTML={definitionObject['definition']}></p> */}
                            <p dangerouslySetInnerHTML={{ __html: definitionObject['definition'] }}></p>
                            <strong>Example:</strong>
                            <p dangerouslySetInnerHTML={{ __html: definitionObject['example'] }}></p>
                            {/* <p >{definition.example}</p> */}

                        </Typography>
                    </div>

                }

            </CardContent>
        </Card>
    )
}

export default CardUrbanDefinition
