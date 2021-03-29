import { useEffect, useMemo, useState } from "react"
import { Link, navigate } from '@reach/router'

import Input from "../input/input"

import logo from '../../images/logo_colored.svg'
import searchIcon from '../../images/search.svg'
import calendarIcon from '../../images/calendar.svg'
import usersIcon from '../../images/users.svg'

import { MENU_LIST, EXTRA_MENU_LIST } from './helpr'

import './styles.scss'


const TopBar = ({ menuList, pathname, extraLinks, onClickExtraLink, activeExtraLink }) => {
  const [follower, setFollower] = useState({})

  useEffect(() => {
    const elem = document.querySelector('.link-item.active')
    if(elem) {
      setFollower({left: elem.offsetLeft, width: elem.offsetWidth})
    }
  }, [extraLinks])

  const renderMenuList = useMemo(() => (menuList || []).map((item, index) => (
    <Link key={index} to={item?.link || ''} className={`menu-item ${(item?.active || [])?.includes(pathname) ? 'active' : ''}`}>{item?.label}</Link>
  )), [menuList, pathname])

  const renderExtraLinks = useMemo(() => (extraLinks || []).map((item, index) => (
    <div 
      key={index}
      className={`link-item ${activeExtraLink === item?.key ? 'active' : ''}`}
      onClick={e => {
        setFollower({left: e.target.offsetLeft, width: e.target.offsetWidth})
        onClickExtraLink && onClickExtraLink(item?.key)
      }}
    >
      {item?.label}
    </div>
  )), [extraLinks, activeExtraLink, onClickExtraLink])


  return (
    <div className="top-bar">
      <div className="top-part">
        <div className="left-side">
          <img onClick={() => navigate('/')} src={logo} alt="Airbnb" className={`logo ${pathname !== '/' ? 'clickable' : ''}`} width="20px"/>
          <div className="search-fields">
            <Input placeholder="Anywhere" rightIcon={searchIcon} />
            <Input placeholder="Anytime" rightIcon={calendarIcon} />
            <Input placeholder="Guests" rightIcon={usersIcon} />
          </div>
        </div>
        <div className="right-side">
            <div className="menu-list">
              {renderMenuList}
            </div>
        </div>
      </div>
      {extraLinks && extraLinks.length > 0 && (
        <div className="extra-links">
          {renderExtraLinks}
          <span className="follower" style={follower} />
        </div>
      )}
    </div>
  )
}

export default TopBar

TopBar.defaultProps = {
  menuList: MENU_LIST,
  pathname: '/',
  extraLinks: EXTRA_MENU_LIST,
  onClickExtraLink: key => {},
  activeExtraLink: '',
}
