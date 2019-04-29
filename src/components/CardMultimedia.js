import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalInfo from './ModalInfo';

const CardMultimedia = (props) => {

	const { Poster, Title, Type, Year, imdbID } = props.multimediaCard;

	if (!Poster) return null

	return (
		<div className="col-3 my-3">
			<Card>
				<Card.Img variant="top" src={Poster} />
				<Card.Body>
					<Card.Title className="text-center">{Title}</Card.Title>
					<Card.Text className="text-center">
						{Year}
					</Card.Text>
					<div className="row">
						<div className="col-12 text-right">
							<ModalInfo
								idMultimedia={imdbID}
							/>
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>

	)


};

export default CardMultimedia;