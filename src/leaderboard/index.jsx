import React, { Component } from "react";

export class Leaderboard extends Component {
  render() {
    const leaderboard = localStorage.getItem("leaderboard") || [
      
    ];
    return (
      <div>
        
      </div>
    );
  }
}