import { useEffect } from 'react';
import { useLocation } from "react-router-dom"
import { clearVolume, getVolume, volumeLoading } from '../../store/volume/actions';
import { useSelector, useDispatch } from 'react-redux';
import { LoadingComponent } from '../../components/LoadingComponent/LoadingComponent';
import './BookPage.scss'
import { volumeLoadingSelector, volumeSelector } from '../../store/volume/selector';
import { useNavigate } from "react-router-dom";

export const BookPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const volume = useSelector(volumeSelector);
  const volumeLoadingStatus = useSelector(volumeLoadingSelector);

  useEffect(() => {
    const { name } = location.state;
    dispatch(getVolume(name))
  }, [])

  function returnToPreviosPage () {
    dispatch(clearVolume());
    dispatch(volumeLoading(true));
    navigate(-1);
  }

  return (
    <>
      {
        volumeLoadingStatus === true ? 
        <div className='wrapper__book-page loading'>
          <LoadingComponent/>
        </div> : 
        <div className='wrapper__book-page'>
        <div className="container__book">
          <button onClick={() => returnToPreviosPage()} className='button__go-back'>Go back</button>
          <div className="volume">
            <div className="volume__content">
              <img className='volume__image' src={volume.image} alt="" />
              <div className="volume__content-text">
                <div className='volume__title'>
                  <div className="volume__title-text">Title:</div>
                  <div className="volume__title-desc">{volume.title}</div>
                </div>
                <div className='volume__title'>
                  <div className="volume__title-text">categories:</div>
                  <div className='volume__title-desc'>{volume.categories}</div>
                </div>
                <div className='volume__title'>
                  <div className="volume__title-text">authors:</div>
                  <div className='volume__title-desc'>{volume.authors}</div>
                </div>
              </div>
            </div>
            {
              volume.description ? 
                <div className="volume__description">
                  <h2 className='volume__description-title'>Description</h2>
                  <div className="volume__description-text" dangerouslySetInnerHTML={{ __html: volume.description }}></div>
                </div> : ''
            }
            
          </div>
        </div>
      </div>
      }
    </>
  )
}