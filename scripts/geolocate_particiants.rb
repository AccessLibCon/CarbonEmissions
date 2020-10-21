#!/usr/bin/env ruby

require 'json'
require 'csv'
require 'geocoder'
require 'byebug'

Geocoder.configure(:units => :km)

confcoords = [49.2608724,-123.1139529]

cities = {}

input = CSV.read('../data/2020-registrations_locations.csv', headers: :first_row).map(&:to_h)

input.each do |row|
  city = row['city']
  geocoded = Geocoder.search(row['location'])
  lat = geocoded.first.data['lat']
  lon = geocoded.first.data['lon']
  cities[city] = {
    'city' => city,
    'province' => row['prov_or_state'],
    'count' => row['count'],
    'distance' => (Geocoder::Calculations.distance_between(confcoords,[lat, lon]) * 1000).round,
    'lat' => lat,
    'lon' => lon
  } 
end

File.open("../data/2020-affiliations.json","w") do |f|
  f.write(JSON.pretty_generate(cities))
end