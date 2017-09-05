import Vex from 'vexflow';

import React, { Component } from 'react';

const { Accidental, Formatter, Stave, StaveNote, Renderer } = Vex.Flow;

export default class Notes extends Component {
    render() {
        return <div ref="outer" style={{
            padding: 10,
            display: "inline-block",
        }}>
        </div>;
    }
    componentDidMount() {
        const { chord } = this.props;
        const svgContainer = document.createElement('div');
        const renderer = new Renderer(svgContainer, Renderer.Backends.SVG);
        const ctx = renderer.getContext();
        const stave = new Stave(0, 0, 600);  // x, y, width
        stave.addClef("treble").setContext(ctx).draw();
        const bb = Formatter.FormatAndDraw(ctx, stave, chord);
        const svg = svgContainer.childNodes[0];
        svg.style.overflow = "visible";
        svgContainer.style.width = 100 + "px";
        this.refs.outer.appendChild(svgContainer);
    }
}