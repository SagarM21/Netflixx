import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { Movie } from "../typings";

interface Props {
	// when using firebase
	movie: Movie | DocumentData;
}

function Thumbnail({ movie }: Props) {
	const [showModal, setShowModal] = useRecoilState(modalState);
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
	return (
		<div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
			<Image
				src={`https://image.tmdb.org/t/p/w500${
					movie.backdrop_path || movie.poster_path
				}`}
				onClick={() => {
					setCurrentMovie(movie);
					setShowModal(true);
				}}
				className='rounded-sm object-cover md:rounded'
				layout='fill' // when u apply fill then in the parent block provide relative/absolute class
			/>
		</div>
	);
}

export default Thumbnail;
