"use client";
import React from 'react';
import { FaBookOpen, FaClipboardList } from 'react-icons/fa';
import { AiOutlineBulb } from 'react-icons/ai';
import { BsPcDisplay } from 'react-icons/bs';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { FaHandshake } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

const WelcomeFooter = () => {
  return (
    <footer
      style={{
        width: '100%',
        height: '70px',
        backgroundColor: '#013069',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        position: 'fixed',
        bottom: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '9px',
          right: '508px',
          width: '50px',
          height: '50px',
          color: '#013069',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <a href="WorkshopPage" style={{ color: '#F9C85D'}}>
          <AiOutlineBulb style={{ fontSize: '40px' }} />
        </a>
      </div>
      <div
        style={{
          display: 'absolute',
          gap: '300px',
          maxWidth: '100%',
          padding: '33px',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        {[{ icon: GiTeacher, url: "/infoSession", right: '650px' },
          { icon: FaHandshake, url: "", right: '450px' },
          { icon: IoChatbubblesOutline, url: "/conference", right: '250px' },
          { icon: BsPcDisplay, url: "/hackaton", right: '50px' },
          { icon: FaBookOpen, url: "/guide", left: '450px' },
          { icon: FaClipboardList, url: "/test1", left: '680px' }].map(({ icon: Icon, url, right, left }, index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              color: '#F9C85D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'absolute',
              right: right,
              left: left,
              top: '10px',
            }}
          >
            <a href={url} style={{ color: 'inherit' }}>
              <Icon style={{ fontSize: '40px' }} />
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default WelcomeFooter;