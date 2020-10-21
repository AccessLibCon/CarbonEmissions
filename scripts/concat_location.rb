#!/usr/bin/env ruby

# utility for formatting CSV

require 'csv'
require 'byebug'

input = CSV.read('../data/2020-presenter_locations_raw.csv', headers: :first_row).map(&:to_h)

CSV.open('../data/2020-presenter_locations.csv', 'wb') do |output_row|

  input.each do |row|
    output_row << [row['city'] + ', ' + row['prov_or_state'] + ', ' + row['country'],row['city'],row['prov_or_state'],row['country'],row['count']]
  end

end

