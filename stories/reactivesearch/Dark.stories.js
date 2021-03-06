import React, { Component } from "react";
import { ReactiveBase, DataSearch, CategorySearch, TextField, ResultList, SelectedFilters } from "@appbaseio/reactivesearch";

import { booksList } from "./resultViews";

export default class CategorySearchDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
				{...this.props}
			>
				<div className={`row ${this.props.themePreset}`}>
					<div className="col">
						<SelectedFilters componentId="BookSensor" />
						<br />
						<DataSearch
							dataField={["original_title", "original_title.search"]}
							componentId="BookSensor"
							title="DataSearch"
						/>
						<br />
						<CategorySearch
							dataField={["original_title", "original_title.search"]}
							categoryField="authors.raw"
							componentId="BookSensor2"
							title="CategorySearch"
						/>
						<br />
						<TextField
							dataField="original_title.search"
							componentId="BookSensor3"
							title="TextField"
						/>
					</div>

					<div className="col">
						<ResultList
							componentId="SearchResult"
							dataField="original_title"
							from={0}
							size={3}
							onData={booksList}
							className="result-list-container"
							pagination
							react={{
								and: ["BookSensor", "BookSensor2", "BookSensor3"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
