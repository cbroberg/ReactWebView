import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import Remarkable from 'react-remarkable'
import MarkdownFile from './markdown.md'

class Markdown extends Component {
	state = { text: 'Loading' }

	componentDidMount() {
		fetch(MarkdownFile)
			.then(response => response.text())
			.then(text => this.setState({ text }))
	}

	render() {
		const { text } = this.state

		return (
			<div>
				<ReactMarkdown source={text} />
				<Remarkable source={text} />
			</div>
		)
	}
}

export default Markdown