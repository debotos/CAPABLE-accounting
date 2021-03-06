import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { Route, Link } from 'react-router-dom'

import Salaries from './EntryItems/Salaries'
import Fringe from './EntryItems/Fringe'
import Consultant from './EntryItems/Consultant'
import Equipment from './EntryItems/Equipment'
import Supplies from './EntryItems/Supplies'
import Travel from './EntryItems/Travel'
import FieldVisit from './EntryItems/FieldVisit'
import Others from './EntryItems/Others'
import Events from './EntryItems/Events'
import Training from './EntryItems/Training'
import Contractual from './EntryItems/Contractual'

const { SubMenu } = Menu
const { Content, Sider } = Layout

export class Entry extends Component {
	render() {
		const { match, budgetYear } = this.props
		const pathArray = window.location.pathname.split('/')
		const option = pathArray[pathArray.length - 1]
		return (
			<>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Entry</Breadcrumb.Item>
					<Breadcrumb.Item style={{ textTransform: 'capitalize' }}>{option}</Breadcrumb.Item>
				</Breadcrumb>
				<Layout style={{ padding: '24px 0', background: '#fff' }}>
					<Sider width={200} style={{ background: '#fff' }}>
						<Menu mode='inline' defaultOpenKeys={['subMenu1']} style={{ height: '100%' }}>
							<SubMenu
								key='subMenu1'
								title={
									<span>
										<Icon type='folder-open' />
										Entry Options
									</span>
								}
							>
								{MenuItems.map((x, i) => (
									<Menu.Item key={`entry_option_${i}`}>
										{x.label}
										<Link to={`${match.path}/${x.route}`} />
									</Menu.Item>
								))}
							</SubMenu>
						</Menu>
					</Sider>
					<Content style={{ padding: '0 24px', minHeight: 280 }}>
						<Route
							exact
							path={`${match.path}/`}
							component={props => <Intro {...props} budgetYear={budgetYear} />}
						/>
						<Route
							path={`${match.path}/salaries`}
							component={props => <Salaries {...props} budgetYear={budgetYear} />}
						/>
						<Route
							path={`${match.path}/fringe`}
							component={props => <Fringe {...props} budgetYear={budgetYear} />}
						/>
						<Route
							path={`${match.path}/consultant`}
							component={props => <Consultant {...props} budgetYear={budgetYear} />}
						/>
						<Route
							path={`${match.path}/equipment`}
							component={props => <Equipment {...props} budgetYear={budgetYear} />}
						/>
						<Route
							path={`${match.path}/supplies`}
							component={props => <Supplies {...props} budgetYear={budgetYear} />}
						/>
						<Route
							path={`${match.path}/travel`}
							component={props => <Travel {...props} budgetYear={budgetYear} />}
						/>
						<Route
							path={`${match.path}/field_visit`}
							component={props => <FieldVisit {...props} budgetYear={budgetYear} />}
						/>
						<Route
							path={`${match.path}/contractual`}
							component={props => <Contractual {...props} budgetYear={budgetYear} />}
						/>
						<Route
							path={`${match.path}/events`}
							component={props => <Events {...props} budgetYear={budgetYear} />}
						/>
						<Route
							path={`${match.path}/training`}
							component={props => <Training {...props} budgetYear={budgetYear} />}
						/>
						<Route
							path={`${match.path}/others`}
							component={props => <Others {...props} budgetYear={budgetYear} />}
						/>
					</Content>
				</Layout>
			</>
		)
	}
}

export default Entry

const Intro = () => (
	<p style={{ fontSize: '50px', opacity: 0.5, textAlign: 'center' }}>
		Please select one of Entry Options!
	</p>
)

const MenuItems = [
	{
		label: 'Salaries And Wages',
		route: 'salaries'
	},
	{
		label: 'Fringe',
		route: 'fringe'
	},
	{
		label: 'Consultant',
		route: 'consultant'
	},
	{
		label: 'Equipment',
		route: 'equipment'
	},
	{
		label: 'Supplies',
		route: 'supplies'
	},
	{
		label: 'Travel and Visa',
		route: 'travel'
	},
	{
		label: 'Field Visit',
		route: 'field_visit'
	},
	{
		label: 'Contractual',
		route: 'contractual'
	},

	{
		label: 'Event and Meetings',
		route: 'events'
	},
	{
		label: 'Training',
		route: 'training'
	},
	{
		label: 'Others',
		route: 'others'
	}
]
