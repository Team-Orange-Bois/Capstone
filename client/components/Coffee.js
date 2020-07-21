/* eslint-disable react/no-danger */
import React from 'react'

export default function Coffee() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".bmc-button img{height: 34px !important;width: 30px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 15px 7px 10px !important;line-height: 35px !important;height:51px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#FDC925 !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 15px 7px 10px !important;font-size: 28px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Rajdhani', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}"
        }}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400&display=swap"
        rel="stylesheet"
      />
      <a
        className="bmc-button"
        rel="noreferrer"
        target="_blank"
        href="https://www.buymeacoffee.com/siqbeets"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
          alt="Buy us a coffee"
        />
        <span style={{marginLeft: '5px', fontSize: '28px !important'}}>
          buy us coffee
        </span>
      </a>
    </div>
  )
}
